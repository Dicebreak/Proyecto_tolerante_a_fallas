const {name}=require("ejs")
const conexion=require("../util/peticiones")

exports.save=(req,res)=>{
    const cultivo=req.body.cultivo
    const descripcion=req.body.desid
    const costo=req.body.costoid
    console.log(cultivo+descripcion)
    conexion.query("INSERT INTO objetos (name, descripcion, costo) VALUES ('"+cultivo+"','"+descripcion+"','"+costo+"');",(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/")
        }
    })
}

exports.update=(req,res)=>{
    const id= req.body.id
    const name=req.body.cultivo
    const descripcion=req.body.desid
    const costo=req.body.costoid
    console.log("id: "+id+name+descripcion)
    conexion.query("UPDATE objetos SET name='"+name+"', descripcion='"+descripcion+"',costo='"+costo+"' WHERE  id="+id,(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/")
        }
    })
}