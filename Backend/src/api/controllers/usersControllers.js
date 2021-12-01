const Users = require('../models/usersModels.js');

module.exports = {
    async index(req, res){
        const user = await Users.findAll();
        return res.json(user);
    },
    async show(req, res){
        const user = await Users.findByPk(req.params.id, {
            include: {association: 'adressess'}
        });;
        return res.json(user);
    },




    async email(req, res) {
        const email = await Users.findOne({
           where: {
               email: req.params.email
           } 

        });
        return res.json(email);
        
    },

    async create(req, res) {
        const data = req.body;

        const user = await Users.create(data);
        return res.status(200).send({
            status: 1,
            message: "Usuario cadastrado com sucesso!!!",
            user
        })
    },
    async update(req, res) {
        const data = req.body;
        await Users.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Usuário Atualizado com sucesso!!!"
    })
    },
    async delete(req, res) {
        const data = req.body;
        await Users.destroy(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Usuário Excluido com sucesso!!!"
    })
    },
}

