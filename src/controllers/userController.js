 const userModel= require("../module/userModel")

 const getAllUsers=(req, res)=> {

    const users= userModel.findAll()
    return res.send(users)
       
 }
 const createUsers =(req, res) =>{

    const nome = req.body.nome
    const idade= req.body.idade

    const newUser= {
        id: Date.now(),
        nome: nome,
        idade: idade
    }
    const createdUser = userModel.create(newUser)
    

    res.status(201).json(createdUser)
}
 module.exports = {
    getAllUsers,
    createUsers
}
 
