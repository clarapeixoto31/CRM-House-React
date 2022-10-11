const clientSchema = require("../models/clientSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const SECRET = process.env.SECRET

const getAll = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).send("Erro no header")
    }

    jwt.verify(token, SECRET, (err) => {
        if(err) {
            return res.status(401).send("Não autorizado")
        }
    })
      
    clientSchema.find(function (err, users) {
      if(err) {
        res.status(500).send({ message: err.message })
      }
        res.status(200).send(users)
    }) 
  }

const registerClient = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    try {
        const newClient = new clientSchema(req.body)

        const savedClient = await newClient.save()

        res.status(200).json({
            message: "Cliente registrado com sucesso!",
            savedClient
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateClientById = async (req, res) => {
    try {
        const findClient = await clientSchema.findById(req.params.id)

        if (findClient) {            
            findClient.name = req.body.name || findClient.name
            findClient.email = req.body.email || findClient.email
        }

        const savedClient = await findClient.save()

        res.status(200).json({
            message: "Cliente atualizado com sucesso!",
            savedClient
        })

    } catch (error) {
        console.error(error)
    }
}

const deleteClientById = async (req, res) => {
    try {
        const clientFound = await clientSchema.findById(req.params.id)

       await clientFound.delete()

       res.status(200).json({
           mensagem: `Cliente '${clientFound.email}' deletado com sucesso!`
       })

    } catch (err) {
        res.status(400).json({
            mensagem: err.message
        })
    }
} 

module.exports = {
    getAll,
    registerClient,
    updateClientById, 
    deleteClientById
}