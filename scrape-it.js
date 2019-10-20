const fetch = require('node-fetch');
const Bluebird = require('bluebird');
// const fs = require('fs');
// var json2xlsx = require('node-json-xlsx');
 
fetch.Promise = Bluebird;
var RealEstate = [];
var Urls = [];

var totalListing;
var pageCount;


var cat_no = "51" //  cat_no from the website


var NameAr = ""
var NameEn = "" 
var LinkToThePage= ""
var Email =""
var Mobile =""
var Phone = ""
var TypeName =""
var WebSiteUrl = ""

async function GetTotalPageCount(){
    await fetch('https://that_secret_url'+cat_no+'&pageNumber=1&sortProperty=BestRating&desc=True')
    .then(res => res.json())
    .then(function findCount(data){
      
        totalListing = data.Count
        console.log('Total Listing: '+  totalListing +'')
        pageCount  = totalListing / 10
        pageCount = Math.floor(pageCount)

        console.log( 'Total pages: ' + Math.floor(pageCount))
        fetchData()
       
    }).catch(error => console.error(error));
}


async function fetchData(){
    console.log('###################-------START#'+cat_no+'----######################')
        console.log('NameAr, NameEn, LinkToThePage, Email, Mobile, Phone, TypeName, WebSiteUrl')
    for (i = 1; i <= pageCount ; i++) { 
        
           await fetch('https://https://that_secret_url='+cat_no+'&pageNumber='+ i +'&sortProperty=BestRating&desc=True')
            .then(res => res.json())
            .then(function dataLoop(data){
                for (x in data.Businesses) {
                    if (data.Businesses.hasOwnProperty(x)) {
                        result = data.Businesses[x].NameAr + ', ' + data.Businesses[x].Name + ', ' + 'https://url'+ data.Businesses[x].Url + ', ' +data.Businesses[x].Email + ', ' +data.Businesses[x].Mobile + ', ' +data.Businesses[x].Phone + ', ' +data.Businesses[x].TypeName + ', ' +data.Businesses[x].WebSiteUrl 
                        console.log(result) 

                    }
                   }
                                          
        
            });
        
        }
        console.log('###################-------END#'+cat_no+'----######################')
    }

GetTotalPageCount()
