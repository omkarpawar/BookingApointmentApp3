const Sequelize = require('sequelize');


const sequelize = new Sequelize('appointment3','root','omkar',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;