const { NetworkAuthenticationRequire } = require('http-errors');
let PythonShell = require('python-shell');
const notice = require('../model/notice');

const noticeIdx = ["학사","장학","행사","채용/취업","일반/봉사"]




var options = {

  mode: 'text',

  pythonPath: '',

  pythonOptions: ['-u'],

  scriptPath: '',

};


PythonShell.PythonShell.run('crawl.py', options, function (err, results) {

  console.log("python run!")

});
