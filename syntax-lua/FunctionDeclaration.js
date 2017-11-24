/*globals require, exports */

'use strict';

var traits = require('escomplex-traits'),
    utils = require('../utils');

exports.get = get;

function get() {
    return traits.actualise(1, 0, "function",
        (node) => {
            return sigName(node.identifier);
        },
        ["identifier", "parameters", "body"],
        (node) => {
            return utils.safeName(node);
        },
        (node, syntax, createScope) => {
            createScope(sigName(node.identifier), node.identifier.loc, node.parameters.length);
        });
}

function sigName(node) {
    let names = [];

    function _sigNameHelper(node) {
        if (node.base) {
            _sigNameHelper(node.base);
            names.push(node.indexer || ".");
            names.push(utils.safeName(node));
        } else {
            names.push(utils.safeName(node));
        }
    }

    _sigNameHelper(node);
    return names.join("");
}
