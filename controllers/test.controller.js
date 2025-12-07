const models = require('../models')

async function test(req, res) {
    // One to one - 1:1 - a user has one address, or an address belongs to one user
    // One to many - 1:m - a user has many posts
    // Many to many - m:n - a post belongs to many categories, a categories belongs to many post

    //One to One Relationship
    // const user = await models.User.findByPk(2, {
    //     include:[models.Address]
    // })

    // const address = await models.Address.findByPk(1, {
    //     include:[models.User]
    // })
    
    // One to Many Relationship
    // const user = await models.User.findByPk(1, {
    //     include:[models.Post]
    // })

    //Many To Many Relationship
    // const post = await models.Post.findByPk(4, {
    //     include:[models.Category]
    // })
    const post = await models.Category.findByPk(9, {
        include:[models.Post]
    })

    res.status(200).json({
        data: post
    })
}

module.exports = {
    test: test
}