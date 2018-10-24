'use strict';

// - Конфиги для окружений
var
    _ = require('lodash'),
    configs = {
        common: require(__dirname +  '/config/common'),
        development: require(__dirname +  '/config/development'),
        production: require(__dirname +  '/config/production'),
    }
;

// - Отдаем объединенный конфиг (общий + конфиг окружения)
module.exports = _.merge(configs.common(__dirname), configs[process.env.NODE_ENV](__dirname));
