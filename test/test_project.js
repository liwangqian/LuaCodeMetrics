'use strict';

const analysis = require('../index');

const filePaths = [
    './test/texture/test01.lua',
    './test/texture/test02.lua'
];

analysis.project(filePaths).then(report => {
    console.log(JSON.stringify(report, null, 4));
}).catch(error => {
    console.log(error);
});