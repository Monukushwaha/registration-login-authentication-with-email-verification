var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
var nodemailer = require('nodemailer');



var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: "user@gmail.com",
      pass: ""
  }
});




 
module.exports.register=function(req,res){
    var today = new Date();
    var encryptedString = cryptr.encrypt(req.body.password);
    var email=req.body.email;
    rand=Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    link="http://"+req.get('host')+"/verify?id="+rand;
    mailOptions={
    to :email,
    subject : "Please confirm your Email account",
    html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
   
   }
   console.log(mailOptions);
   smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
      console.log(error);
      res.end("error");
   }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
   }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    })};
