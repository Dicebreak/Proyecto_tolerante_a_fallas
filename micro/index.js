const express=require("express")
const app = express ();
const bodyparser=require("body-parser")
const sequelize=require("./util/database")
const post=require("./util/peticiones")
const post2=require("./util/peticiones2")
const User=require("./routes/users")
const router=express.Router()
const Objeto=require("./routes/objeto")
const objeto=require("./models/objeto")
var oro=2000

app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))
app.use(express(JSON));
app.use(Objeto)
//test route
post2.query("create table if not exists usuarios (id serial, name varchar(30), password varchar(30));")

app.get("/",(req,res)=>{
    post.query('SELECT * FROM objetos;',(error,results)=>{
        if(error){
            console.log("tipo de error",error)
        }else{
            data=results.rows
            console.log("papa",data[0])
            res.render("index", {results:data})
        }
    })
})

app.get("/create",(req,res)=>{
    res.render("create")
})

app.get("/edit/:id",(req,res)=>{
    const id= req.params.id
    console.log(id+"aqui esta el id")
    post.query("SELECT * FROM objetos WHERE id="+id,(error,results)=>{
        if(error){
            console.log("tipo de error"+error)
        }else{
            data=results.rows
            console.log("data en edit ",data[0])
            res.render("edit", {cultivos:data[0]})
        }
    })
}
)

app.get("/erase/:id",(req,res)=>{
    const id=req.params.id
    post.query("DELETE FROM objetos WHERE id="+id,(error,results)=>{
        if(error){
            console.log("tipo de error"+error)
        }else{
            res.redirect("/")
        }
    })
})


app.use((error,req,res,next)=>{
    console.log(error)
    const status= error.statusCode ||500
    const message= error.message
    res.status(status).json({message:message})
})

const crud=require("./controllers/crud")
app.post("/save",crud.save)
app.post("/update",crud.update)

sequelize
    .sync()
    .then(result=>{
        console.log("conexion")
        app.listen(3001)
    })
    .catch(err=>{
        console.log(err)
    })

module.exports=router