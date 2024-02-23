const Sequelize = require("sequelize")
const db= require("../util/database")

const objeto=db.define("objeto",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    costo: Sequelize.INTEGER,
    
},{
    timestamps:false
}
);

module.exports=objeto;