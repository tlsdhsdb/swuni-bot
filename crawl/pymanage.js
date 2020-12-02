const { NetworkAuthenticationRequire } = require('http-errors');
let PythonShell = require('python-shell');
const notice = require('../model/notice');

const noticeIdx = ["학사","장학","행사","채용/취업","일반/봉사"]

function getCurrentDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var today = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();
  return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}



var options = {

  mode: 'text',

  pythonPath: '',

  pythonOptions: ['-u'],

  scriptPath: '',

  //args: ['haksa','janghak','hengsa','cheayong','bongsa']

};


PythonShell.PythonShell.run('crawl.py', options, function (err, results) {

  console.log("python run!")

});
