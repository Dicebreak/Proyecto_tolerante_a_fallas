const User= require("../models/user");

exports.getUsers=(req,res,next)=>{
    User.findAll()
        .then(users=>{
            res.status(200).json({users:users});

        })
        .catch(err=>console.log(err));
}

exports.getUsersid=(req,res,next)=>{
    const userId=req.params.userId;
    User.findByPk(userId)
        .then(user=>{
            if(!user){
                return res.status(404).json({message:"usuario no encontrado"});
            }
            res.status(200).json({user:user});
        })
        .catch(err=>console.log(err));
}


exports.createUser=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    User.create({
        name:name,
        email:email
    })
    .then(result=>{
        console.log("usuario creado")
        res.status(201).json({
            message:"usuario creado con exito",
            user:result
        })
            
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.UpdateUser=(req,res,next)=>{
    const userId=req.params.userId
    const Upname=req.params.name
    const Upemail=req.params.name
    user.findByPk(userId)
        .then(user=>{
            if(!user){
                return res.status(404).json({message:"usuario no encontrado"});
            }
        
        user.name=Upname
        user.email=Upemail
        return user.save();
        })
        .then(result=>{
            res.result(200).json({message:"usuario actualizado"})
        })
}

exports.DeleteUser=(req,res,next)=>{
    const userId=req.params.userId
    User.findByPk(userId)
        .then(user=>{
            if(!user){
                return res.status(404).json({message:"usuario no encontrado"});
            }
            return User.destroy({
                where:{
                    id:userId
                }
            });
        })
        .then(result=>{
            res.status(200).json({message:"usuario eliminado"})
        })
        .catch(err=>console.log(err));
}

