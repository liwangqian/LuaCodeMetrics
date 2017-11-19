/*globals require, exports */

'use strict';

var traits = require('escomplex-traits'),
    utils = require('../utils');

exports.get = get;

function get() {
    return traits.actualise(
        (node) => {
            return node.variables.length;
        },
        0, undefined,
        (node) => {
            return utils.safeName(node.variables[0]);
        }, ["variables", "init"]);
}
