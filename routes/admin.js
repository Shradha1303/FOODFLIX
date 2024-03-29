var express = require('express');
var pool = require('./pool')
var LocalStorage = require('node-localstorage').LocalStorage;
 localStorage = new LocalStorage('./scratch');

var router = express.Router();
router.get("/logout",function(req,res){
    localStorage.clear()
    res.render('login',{message:''})
})
    
router.get("/loginpage",function(req,res){
    try{
        var admin=localStorage.getItem('ADMIN')
        console.log("ADDDDDDMIN",admin)
        if(admin)
        res.render('dashboard',{admin:JSON.parse(admin)})
        else
        res.render('login',{message:''})
       }catch(e)  
         {res.render('login',{message:''})}

})

router.post('/chk_admin_login',function(req,res,next){
    pool.query("select * from  food_details.admins where (emailid=? or mobileno=?) and password=?",[req.body.emailid,req.body.emailid,req.body.password],function(error,result){
        if(error){
            res.render('login', {message:'Server Error'})
        }
        else{
            if(result.length == 0)
            {
                res.render('login',{message:'Invalid Email Id/ Mobile No/ Password'})
            }
            else{
                console.log(result[0])
                localStorage.setItem('ADMIN',JSON.stringify(result[0]))
                res.render('dashboard',{admin:result[0]})
            }
        }
    })
    
})

module.exports = router;