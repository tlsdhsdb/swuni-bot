var express = require('express');
const notice = require('../model/notice');
var router = express.Router();

const noticeIdx = ["학사","장학","행사","채용/취업","일반/봉사"]

const returnTemplate = require('../template.js')

router.post('/getInfo/haksa',(req,res)=>{
        (async()=>{
                var url = "https://www.swu.ac.kr/www/noticea.html"

                var notices = await notice.find({classification:noticeIdx[0]})
                        .sort({'updatedAt': 1})
                        .limit(5)
                        .exec()
                var result = returnTemplate(notices,url);
                res.status(200).send("result");
        })()

})

router.post('/getInfo/janghak',(req,res)=>{
        notice.find({classification:noticeIdx[1]},(err,notices)=>{
        if(err) return res.status(500).send({error:"database err"});
        var url = "https://www.swu.ac.kr/www/noticeb.html"
        var result = returnTemplate(notices,url)
        res.status(200).send(result)
        })
        .sort({'updatedAt': 1})
        .limit(5)
        
})

router.post('/getInfo/hengsa',(req,res)=>{
        notice.find({classification:noticeIdx[2]},(err,notices)=>{
        if(err) return res.status(500).send({error:"database err"});
        var url = "https://www.swu.ac.kr/www/noticec.html"
        var result = returnTemplate(notices,url)
        res.status(200).send(result)
        })
        .sort({'updatedAt': 1})
        .limit(5)
})

router.post('/getInfo/cheyong',(req,res)=>{
        notice.find({classification:noticeIdx[3]},(err,notices)=>{
        if(err) return res.status(500).send({error:"database err"});
        var url = "https://www.swu.ac.kr/www/noticed.html"
        var result = returnTemplate(notices,url)
        res.status(200).send(result)
        })
        .sort({'updatedAt': 1})
        .limit(5)
})

router.post('/getInfo/bongsa',(req,res)=>{
        notice.find({classification:noticeIdx[4]},(err,notices)=>{
        if(err) return res.status(500).send({error:"database err"});
        var url = "https://www.swu.ac.kr/www/noticee.html"
        var result = returnTemplate(notices,url)
        //res.status(200).send(result)
        })
        .sort({'updatedAt': 1})
        .limit(5)

})

router.post('/getInfo',function(req,res){
        res.status(200).send('succ')
})


module.exports = router;