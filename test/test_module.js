'use strict';

const analysis = require('../index');

const filePath = 'F:\\lua\\power_manage\\externel.lua';

analysis.module(filePath).then(report => {
    console.log(JSON.stringify(report, null, 4));
}).catch(error => {
    console.log(error);
});