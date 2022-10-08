const express=require("express");
const app =express();
 const bodyParser=require("body-parser");
const cors=require("cors");
 const { urlencoded } = require("body-parser");
app.use(cors());
app.use(express.json());  
app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"dashboard"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});


app.post("/",(req,res)=>{
  
  const {name,email,gender,std,password}=req.body;
  const sql="INSERT  INTO student_registration (id,name,email,gender,stud_class,password) VALUES ('',?,?,?,?,?)";
    con.query(sql,[name,email,gender,std,password],function(err,result){
        if(err){
      res.send(err.sqlMessage);
        }
          console.log(result)
          res.send(result.messge="registration successfull");
        
        
        })
    
})

app.post("/teacher",(req,res)=>{
  const {name,email,gender,std,password}=req.body;
  const sql="INSERT  INTO teacher_registration (id,name,email,gender,class,password) VALUES ('',?,?,?,?,?)";
  con.query(sql,[name,email,gender,std,password],function(err,result){
      if(err){
          console.log(err);
      }
      console.log(result);
      res.send(err);
      res.send(result.messge="registration successfull");
      })

})
app.post("/get_attendance",(req,res)=>{
 
  const arr=req.body;
  
  arr.forEach(element => {
    var sql="INSERT INTO attendance(id,stud_id,presenty,stud_class) VALUES(?,?,?,?)";
    con.query(sql,['',element.stud_id,element.pres,element.stud_class],function(err,result){
      if(err){
        console.log(err);
      
      }
      console.log(result);
      res.send(result);
    })
  });
//   var sql="INSERT INTO attendance(id,present/absent) VALUES(?,?)";

})
app.get("/school",(req,res)=>{
 
  const sql="SELECT teacher.name,teacher.class,count(student.id) as Total FROM student_registration as student JOIN teacher_registration as teacher ON student.stud_class=teacher.class GROUP by teacher.name";
  con.query(sql,function(err,result){
      if(err){
          console.log(err);
      }
      console.log(result);
      res.send(result);
      })

})  
app.post("/Class_data",(req,res)=>{
 var {std}=req.body;
 console.log([std]);
  const sql="SELECT student.id,student.name,student.gender,attendance.presenty from student_registration as student JOIN attendance ON student.id=attendance.stud_id WHERE attendance.stud_class=?";
  con.query(sql,[std],function(err,result){
      if(err){
          console.log(err);
      }
      console.log(result);
      res.send(result);
      })

})  

app.post("/attendance",function(req,res){

 const {stud_class}=req.body;
  const sql="SELECT id,name,stud_class FROM  student_registration WHERE stud_class=?";
  con.query(sql,[stud_class],function(err,result){
    if(err){
      console.log(err)
    }
    res.send(result);
  })
})
app.post("/checkLogin",(req,res)=>{
  const {email,password}=req.body;
  const sql="SELECT class FROM  teacher_registration where email=? and password=?";
  con.query(sql,[email,password],function(err,result){
    if(err){
      console.log(err)
    }
    
    res.send(result);
  })
})
app.listen(5000,()=>{
    console.log("server is running");
})