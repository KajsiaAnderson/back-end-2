const houses = require('./db.json')
const globalId = 4

module.exports= {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const deleteId = req.params.id
        let index = houses.findIndex(el => el.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        let newHouses = {
            id: globalId,
            address,
            price: +price,
            imageURL
        }

        houses.push(newHouses)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        let id = req.params.id
        let type = req.body.type
        let index = houses.findIndex(el => el.id === +id)

        if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        }else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else{
            res.sendStatus(400)
        }
        }
    }
