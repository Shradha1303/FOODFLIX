var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

/* API used to show book interface*/
router.get('/foodinterface', function(req, res, next) {
    try{
     var admin=localStorage.getItem('ADMIN')
     
     console.log(admin)  
     if(admin)
     res.render('foodinterface',{status:-1,message:''})
     else
     res.render('login',{message:''})
    }catch(e)
    {
     res.render('login',{message:''})
    }
   })

router.get('/displayposter',function(req,res,next){
    res.render('displayposter',{data:req.query})
    console.log(data)
  })

router.post('/edit_poster',upload.single('picture'),function(req,res){
   
    pool.query("update all set picture=? where  idfood=?",[req.file.originalname,req.body.idfood],function(error,result){
     if(error)
     { console.log(error)
       res.redirect('/food/all_details')
     }
     else
     {
   
      res.redirect('/food/all_details')
     }
   
    })
   
  })

/*API used to fetch food types*/
router.get('/fetch_all_types',function(req,res,next){
    pool.query("SELECT * FROM foodtype",function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else 
        {
            res.status(200).json(result)
        }
    })
})
/*API used to fetch food items*/
router.get('/fetch_all_items',function(req,res,next){
    pool.query("SELECT * FROM fooditem where foodid=?",[req.query.foodid],function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else
        {
            res.status(200).json(result)
        }
    })
})


router.post('/submit_all_details',upload.single('picture'),function(req,res,next){
    pool.query('insert into food_details.allfood (foodid,fooditemid,status1,status2,description,price,offerprice,picture) values(?,?,?,?,?,?,?,?)',
    [
        req.body.foodtype,
        req.body.fooditem,
        req.body.status1,
        req.body.status2,
        req.body.des,
        req.body.price,
        req.body.offerprice,
        req.file.originalname
    ],function(error,result){
            if(error)
            {
                res.render('foodinterface',{status:0, message:'Server Error....'})
            }
            else
            {
                res.render('foodinterface',{status:1, message:'Record Submitted Successfully'})
            }
    })
})
/*this API displays all data*/
router.get('/all_details',function(req,res,next){
pool.query("SELECT F.*,(select FI.foodname from food_details.fooditem FI where FI.fooditemid = F.fooditemid ) as foodname,(select FT.foodtype from food_details.foodtype FT where FT.foodid = F.foodid ) as foodtype FROM food_details.allfood F;",function(error,result)
        {
            if(error)
            {
                res.render('display',{data:[]})
            }
            // else if(result.len() == 0)
            // {
            //     res.send('No record found')
            // }
            else
            {
                //console.log('res', result);
                res.render('display',{data : result})
            }
        })
    })

/*API to edit food list*/
router.get('/edit_food_data',function(req,res,next){
    pool.query("SELECT F.*,(select FI.foodname from food_details.fooditem FI where FI.fooditemid = F.fooditemid ) as foodname,(select FT.foodtype from food_details.foodtype FT where FT.foodid = F.foodid ) as foodtype FROM food_details.allfood F where F.idfood=?;",[req.query.idfood],function(error,result){
        if(error)
        {
            res.render('displaybyid',{data: []})
        }
        else
        {
            console.log(result);
            res.render('displaybyid',{data: result[0]})
        }
    })
})

router.post('/edit_food_details',function(req,res,next){
    if(req.body.btn == "EDIT")
    {
        pool.query("update food_details.allfood set foodid=?,fooditemid=?,description=?,status1=?,status2=?,price=?,offerprice=? where idfood=?" ,
        [req.body.foodtype,req.body.fooditem,req.body.des,req.body.status1,req.body.status2,req.body.price,req.body.offerprice,req.body.idfood]
        ,function(error,result){
        console.log(error)
        if(error)
        {
            res.redirect('/food/all_details')
        }
        else
        {
            res.redirect('/food/all_details')
        }
    })
    }
    else
    {
        pool.query("delete from food_details.allfood where idfood=?",[req.body.idfood],function(error,result){
        console.log(error)
        if(error)
        {
            res.redirect('/food/all_details')
        }
        else
        {
            res.redirect('/food/all_details')
        }
    })
    }
})

module.exports = router;