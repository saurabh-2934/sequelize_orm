const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();

const signUp = async (req, res) => {
    try{
        const { name, email, password } = req.body

        const userExist = await models.User.findOne({
            where: {
              email: email
            }
        })
        
        if (userExist) {
            res.status(400).json({
                error_msg: 'Email already exists!'
            })
        } else {

            const hashedPassword = await bcrypt.hash(password, 10)
        
        
            const newUser = {
                name,
                email,
                password: hashedPassword
            }

            const response = await models.User.create(newUser)
            res.status(201).json({
                message: 'User created successfully!',
                response: response
            })
        }
    } catch (error) {
        res.status(500).json({
            error_msg: 'Something went wrong!',
            error: error
        })
    }
}

const signIn = async (req, res) => {
    const { name, password } = req.body
    try {
        const userExist = await models.User.findOne({
            where: {
              name: name
            }
        })
        if (userExist) {
            const matchPassword = await bcrypt.compare(password, userExist.password)
            if (matchPassword) {
                const paylod = {
                    id: userExist.id
                }
                const jwtToekn = jwt.sign(paylod, process.env.SECRET_TOKEN)
                res.status(200).json({
                    message: 'User loign successfull!',
                    jwtToekn: jwtToekn
                })
            } else {
               res.status(500).json({
                error_msg: 'wrong password!'
            }) 
            }
        } else {
            res.status(500).json({
                error_msg: 'User does not exist!'
            })
        }
    } catch (error) {
        res.status(500).json({
            error_msg: 'Something went wrong!',
            error: error
        })
    }
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}