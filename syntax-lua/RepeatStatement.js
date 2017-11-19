/*globals require, exports */

'use strict';

var traits = require('escomplex-traits'),
    utils = require('../utils');

exports.get = get;

function get() {
    return traits.actualise(1, 0, "repeat", undefined, ["condition", "body"]);
}