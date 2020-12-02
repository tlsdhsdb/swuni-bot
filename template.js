var noticeTemp = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
          "listCard": {
            "header": {
              "title": ""
            },
            "items": [
              {
                "title": "",
              },
              {
                "title": "",
              },
              {
                "title": "",
              },
              {
                "title": "",
              },
              {
                "title": "",
              }
            ],
            "buttons": [
              {
                "label": "자세히 보기",
                "action": "webLink",
                "webLinkUrl": ""
              }
            ]
          }
        }
      ]
    }
  }

const returnNotice = function(data,url){
    var notice = noticeTemp;
    
    notice.template.outputs[0].listCard.header = data[0]['classification'];
    for(var i=0;i<5;i++){
        notice.template.outputs[0].listCard.items[i] = data[i]['des']
    }
    notice.template.outputs[0].listCard.buttons[0].webLinkUrl= url;
    //console.log(notice)
    return notice ;
}

module.exports = returnNotice;