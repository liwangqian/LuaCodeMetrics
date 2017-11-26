'use strict';

const analysis = require('../index');

const filePath = './test/texture/test01.lua';

analysis.module(filePath).then(report => {
    console.log(JSON.stringify(report, null, 4));
}).catch(error => {
    console.log(error);
});