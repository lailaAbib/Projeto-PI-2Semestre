const Devices = require('../models/deviceModels.js');

module.exports = {
    async index(req, res){
        const device = await Devices.findAll();
        return res.json(device);
    },
    async show(req, res){
        const device = await Devices.findByPk(req.params.id);;
        return res.json(device);
    },


    async create(req, res) {
        const data = req.body;

        const device = await Devices.create(data);
        return res.status(200).send({
            status: 1,
            message: "Dispositivo cadastrado com sucesso!!!"
        })
    },
    async update(req, res) {
        const data = req.body;
        await Devices.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Dispositivo Atualizado com sucesso!!!"
    })
    },
    async delete(req, res) {
        const data = req.body;
        await Devices.destroy(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Dispositivo Excluido com sucesso!!!"
    })
    },
}

