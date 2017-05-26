const User = require("../../models").User
module.exports = {
    getAll: (req, res, next) => {
        User.findAll().then(users => {
                res.status(200).send({ data: users })
            })
            // res.status(200).send({
            //     message: 'GET ALL'
            // })
    },

    getId: (req, res, next) => {
        // res.status(200).send({
        //         user: req.params.user_id
        //     })
        // id: req.params.user_id
        User.findOne({ where: { id: '1' } }).then(users => {
            res.status(200).send({ data: users })
        })
    },

    getIdWithPost: (req, res, next) => {
        res.status(200).send({
            user: req.params.user_id,
            post: req.params.post_id
        })
    },

    create: (req, res, next) => {
        User.create({ first_name: req.body.first_name, last_name: req.body.last_name, bio: req.body.bio })
            .then(users => {
                res.status(201).send({ success: true, data: users });
            })
            // res.status(201).send({
            //     body: req.body,
            //     params: req.params,
            //     query: req.query

        // })
    },

    update: (req, res, next) => {
        res.status(200).send({
            message: 'PUT'
        })
    },

    delete: (req, res, next) => {
        res.status(200).send({
            message: 'DELETE'
        })
    }

}