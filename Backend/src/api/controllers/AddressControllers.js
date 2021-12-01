const Address = require('../models/AddressModels.js');
const Users = require('../models/usersModels.js');

module.exports = {
    async index(req, res){
        const address = await Address.findAll();
        return res.json(address);
    },
    async show(req, res){
        const address = await Address.findByPk(req.params.id);;
        return res.json(address);
    },        


    async create(req, res) {
            const data = req.body;
           const { id } = await Users.findByPk(data.CodPk_Users);

           
           if(!id) {
               return res.status(400).send({ error: 'Usuário não encontrado!!!' });  
            } 

            const address = await Address.create(data);
            return res.status(201).send({
                message: "Endereço cadastrado com sucesso!!",
                address
            })
            
    },
    async update(req, res) {
        const data = req.body;
        await Address.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Endereço Atualizado com sucesso!!!"
    })

},
    async delete(req, res) {
        const data = req.body;
        await Address.destroy(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Endereço Excluido com sucesso!!!"
    })
    },
}

