const Equipment = require('../models/equipmentModels.js');

module.exports = {
    async index(req, res){
        const equipment = await Equipment.findAll(
            {
            include: {
                association: 'device',
                association: 'depto'
                }
    
            }
        );
        return res.json(equipment);
    },
    // async show(req, res){
    //     const equipment = await Equipment.findByPk(req.params.id);;
    //     return res.json(equipment);
    // },

    async show(req, res){
        const equipment = await Equipment.findByPk(req.params.id, {
            include: {
                association: 'device',
                association: 'depto'
            }
        });;
        return res.json(equipment);
    },




async create(req, res) {
        const data = req.body;

        const department = await Equipment.create(data);
        return res.status(200).send({
            status: 1,
            message: "Equipamento cadastrado com sucesso!!!",
            department

        })
    },
    async update(req, res) {
        const data = req.body;
        await Equipment.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Equipamento Atualizado com sucesso!!!"
    })

},
    async delete(req, res) {
        const data = req.body;
        await Equipment.destroy(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Equipamento Excluido com sucesso!!!"
    })
    },
}
