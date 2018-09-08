var express =require('express');

var app= express();
//to get access to public folder files

app.use(express.static(__dirname+"public"))
app.use(express.static("public/img")) 
 //controle the access to the page 
 app.use( control= (req,res,next)=>{
 	let  currentdate = new Date();
 	let time= currentdate.getHours();
	if (time>=17||time<8){
		res.send("Our office is not open now")
	}
	else{
		next()
	}
 })

app.get('/home',(req,res)=>{
	
	res.sendFile(__dirname+"/public/home.html")
})

app.get('/services',(req,res)=>{
	
	res.sendFile(__dirname+"/public/servises.html")
})
app.get('/contact',(req,res)=>{
	
	res.sendFile(__dirname+"/public/contact.html")
})


app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is runing on port 3000");
  }
});