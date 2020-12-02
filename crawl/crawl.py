# -*- coding: utf-8 -*- 
import pymongo
# db connecting 
import datetime
import requests
import numpy as np
import pandas as pd

from bs4 import BeautifulSoup


infoDic = {"학사":[],"장학":[],"행사":[],"채용/취업":[],"일반/봉사":[]}
idx = ["학사","장학","행사","채용/취업","일반/봉사"]


url = "https://www.swu.ac.kr/index.do"

r = requests.get(url).text
html = BeautifulSoup(r,"html.parser")
selectedHtml = (html.find_all("div","board_tab_child")).__str__()
selectedHtml = BeautifulSoup(selectedHtml,"html.parser")

num = 0
tmp_list = []
id= 0

for selected in selectedHtml.find_all("a"):

    tmp_list.append(selected.string.replace('\ufeff',''))
    num+=1
    if(num==8):
        infoDic[idx[id]] = tmp_list
        tmp_list =[]
        id+=1
        num=0



#db information 

host = "localhost"
port = 27017
conn = pymongo.MongoClient(host,port)
db = conn.get_database('schoolInformation')
collection = db.get_collection('SchoolNotice')
#collection_list = db.collection_names()
#print(collection_list)

#db function 


for i in range(0,5):
    for k in range(0,7):
        ##print(infoDic[idx[i]][k])
        data = {
            "classification":idx[i],
            "des":infoDic[idx[i]][k],
            "date":datetime.datetime.utcnow()
        }
        primary = {
            "des":infoDic[idx[i]][k]
        }
        collection.update(primary,data,upsert=True)

print("py end")
          
        









