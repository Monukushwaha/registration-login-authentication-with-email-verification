var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" ); 
   
});
 

app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);


app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
   console.log("Domain is matched. Information is from Authentic email");
   if(req.query.id==rand)
      {
         console.log("email is verified");
         res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
      }
   else
      {
         console.log("email is not verified");
         res.end("<h1>Bad Request</h1>");
      }
}
else
   {
      res.end("<h1>Request is from unknown source");
   }
});



app.listen(8012);
