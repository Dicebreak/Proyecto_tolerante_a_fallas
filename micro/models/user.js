const Sequelize = require("sequelize")
const db= require("../util/database2")

const user=db.define("user",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    
},{
    timestamps:false
}
);

module.exports=user;