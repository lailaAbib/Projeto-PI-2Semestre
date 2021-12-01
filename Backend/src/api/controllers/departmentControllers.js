const Departments = require('../models/departmentModels.js');
const Company = require('../models/companyModels.js');

module.exports = {
    async index(req, res){
        const department = await Departments.findAll();
        return res.json(department);
    },

    async show(req, res){
        const department = await Departments.findByPk(req.params.id);;
        return res.json(department);
    },

    async create(req, res) {
        const data = req.body;

        const { id } = await Company.findByPk(data.CodPk_empresa);
           
        if(!id) {
            return res.status(400).send({ error: 'Empresa não encontrada!!!' });  
         } 

        const department = await Departments.create(data);
        return res.status(200).send({
            status: 1,
            message: "Departamento cadastrado com sucesso!!!",
            department
        })
    },
    async update(req, res) {
        const data = req.body;
        await Departments.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Departamento Atualizado com sucesso!!!"
    })
    },
    async delete(req, res) {
        const data = req.body;
        await Departments.destroy(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Departamento Excluido com sucesso!!!"
    })
    },
}

