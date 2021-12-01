const Company = require('../models/companyModels.js');

module.exports = {
    async index(req, res){
        const company = await Company.findAll();
        return res.json(company);
    },
    async show(req, res){
        const company = await Company.findByPk(req.params.id);;
        return res.json(company);
    },

    async email(req, res) {
        const email = await Company.findOne({
           where: {
               email: req.params.email
           } 

        });
        return res.json(email);
        
    },

    async create(req, res) {
        const data = req.body;

        const company = await Company.create(data);
        return res.status(200).send({
            status: 1,
            message: "Empresa cadastrada com sucesso!!!",
            company
        })
    },
    async update(req, res) {
        const data = req.body;
        await Company.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Empresa Atualizada com sucesso!!!"
    })
    },
    async delete(req, res) {
        const data = req.body;
        await Company.destroy(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Empresa Excluida com sucesso!!!"
    })
    },
}

