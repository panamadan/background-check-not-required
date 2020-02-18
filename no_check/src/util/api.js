const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://indeed-indeed.p.rapidapi.com/apisearch",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"indeed-indeed.p.rapidapi.com",
    "x-rapidapi-key":"21427ae276msh0f307e737643c14p1893c8jsn6f0008ba85e5"
    },"params":{
    "q":"java",
    "v":"2",
    "format":"json",
    "radius":"25",
    "l":"austin%2C tx"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })