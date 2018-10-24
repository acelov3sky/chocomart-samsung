'use strict';

var
    path = require('path')
    , fs = require('fs')
    , _ = require('lodash')
    , webpack = require('webpack')
    , TextPlugin = require('extract-text-webpack-plugin')
    , HtmlPlugin = require('html-webpack-plugin')
;

module.exports = function(_path) {

    var
        dependencies = Object.keys(require(_path + '/package').dependencies)
        , plugins = []
    ;

    plugins.push(
        /* ------------------------------------------
         * - Все вендора в одном файле
         * ------------------------------------------ */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'assets/js/vendors.bundle.js'
        })
        /* ------------------------------------------
         * - Раскидываем наш css по файлам
         * ------------------------------------------ */
        , new TextPlugin('assets/css/[name].css')
        /* ------------------------------------------
         * - Куда же без нашего родного jQuery
         * ------------------------------------------ */
        , new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            moment: "moment",
       })
    );

    /* - ---------------------------------------------
     * - Собираем страницы через html-webpack-plugin
     * - Для создания новой страницы достаточно создать файл (*.html) в директории ./app/pages
     * - Страницы можно делить на компоненты согласно принятому в es6 шаблонному синтаксису
     * - Подробнее смотри на https://github.com/webpack-contrib/html-loader
     * - --------------------------------------------- */
    fs.readdirSync(_path + "/app/pages").forEach(function(page){
        if (page.match(/^[a-z0-9\-\.]+\.html$/)) {
            plugins.push(new HtmlPlugin({
                filename: page,
                template: _path + "/app/pages/" + page
            }));
        }
    });

    return {

        /* ------------------------------------------
         * - Блок настроек точек входа
         * -- app: основной файл FE
         * -- vendors: зависимости установленне через "npm i <package> --save"
         * ------------------------------------------ */
        entry: _.merge(
            { app: _path + '/app/app.js' },
            dependencies.length ? { vendors: dependencies } : {}
        ),

        /* ------------------------------------------
         * - Блок настроек вывода
         * -- path: путь до корневого каталога сборки
         * -- filename: шаблон скомпилированного entry-файла
         * -- publicPath: глобальный путь (идет префиксом) к ассетам
         * ------------------------------------------ */
        output: {
            path: path.join(_path, 'public'),
            filename: path.join('assets', 'js', '[name].bundle.js'),
            publicPath: './'
        },

        /* ------------------------------------------
         * - Настройки к сторонним библиотекам
         * -- modulesDirectories: директория модулей nodejs
         * -- alias: namespace-ы для удбоного require('_namespace/some.pug')
         * ------------------------------------------ */
        resolve: {
            alias: {
                // - Алиасы статики
                _svg: path.join(_path, 'app', 'assets', 'svg'),
                _images: path.join(_path, 'app', 'assets', 'images'),
                _fonts: path.join(_path, 'app', 'assets', 'fonts'),
                _styles: path.join(_path, 'app', 'assets', 'less'),
                // - Алиасы шаблонов
                _components: path.join(_path, 'app', 'pages', 'components'),
                _layouts: path.join(_path, 'app', 'pages', 'layouts'),
                // - Node modules
                _node: path.join(_path, 'node_modules'),
                // - скрипты
                _scripts: path.join(_path, 'app', 'scripts'),
            }
        },

        /* ------------------------------------------
         * - Настройки loader-ов.
         * - Эти настройки отвечают за подгрузку нужных типов файлов
         *   Очень мощный инструмент, а значит имеет множество нюансов.
         *   https://webpack.github.io/docs/using-loaders.html
         * ------------------------------------------ */
        module: {
            rules: [
                /* - JS файлы */
                {
                    test: /app\/[a-z0-9\/\-\.]+\.js$/,
                    use: [{
                        loader: 'babel-loader',
                        options: { presets: ['es2016'] }
                    }]
                },
                /* - Less стили */
                {
                    test: /\.less$/,
                    use: TextPlugin.extract({
                        fallback: 'style-loader', // - на случай если отключены чанки
                        use: ['css-loader', 'less-loader']
                    })
                },
                /* - Разного рода статика */
                {
                    test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)(\?.*$|$)/i,
                    use: ['file-loader?name=assets/static/[ext]/[name].[hash].[ext]&publicPath=./']
                },
                /* - Html загрузчик */
                {
                    test: /pages\/[a-z0-9\-\.\/]+\.html$/,
                    use: ['html-loader?interpolate']
                },
            ]
        },

        /* -----------------------------------------
         * Plugins - Еще один крутой инструмент webpack-a, позволяющий
         * влиять на разные стадии компиляции.
         * Соответственно есть возможность выцепить и распределить все так
         * как нам будет удобно.
         * Что мы и делаем через плагин html-webpack-plugin.
         * ------------------------------------------ */
        plugins: plugins
    };
};
