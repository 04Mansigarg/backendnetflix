const { Category } = require("@mui/icons-material")

// create item
const CreateOne = (model) => async (req, res) => {
    try {
        let createdItem = await model.create(req.body)

        res.status(201).json(createdItem)
    }
    catch (e) {
        console.log(e.message)
    }
}
// read all item
const getAll = (model) => async (req, res) => {
    try {
        var category = req.query.category
        const criteria = {}
        if (category) {
            criteria.category = category
            let items = await model.find(criteria)
            res.status(200).json(items);
        }
        else{
            let items = await model.find()
            res.status(200).json(items);
        }

        
        
    }
    catch (e) {
        console.log(e.message)
    }


}
// read one item
const getOne = (model) => async (req, res) => {
    try {
        let id = req.params.id
        let item = await model.findOne({ id: id });
        res.status(200).json(item);
    }
    catch (e) {
        console.log(e.message)
    }

};

module.exports = (model) => ({
    post: CreateOne(model),
    getAll: getAll(model),
    getOne: getOne(model),
});