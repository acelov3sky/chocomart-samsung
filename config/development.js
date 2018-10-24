'use strict';

/**
 * Development config
 */
module.exports = function(_path) {

    return {
        context: _path,
        devtool: 'inline-sourcemap',
        watch: true,
    }
};
