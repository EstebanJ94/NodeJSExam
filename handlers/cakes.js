const db = require('../models');

exports.createCake = async (req,res) => {
    try {
        let newCake = await db.Cake.create(req.body);
        return res.status(200).json({
            message: 'Nouveau gateau créé avec succès !',
            newCake
        });

    }
    catch (err) {
        return res.status(400).json({
            message: 'Une erreur s\'est produite',
            error: err
        });
    }
};

//Get all cakes
exports.getAllCakes = async (req, res) => {
    try{
        let cakes = req.query
        ? await db.Cake.find(req.query)
        : await db.Cake.find();
        return res.status(200).json(cakes);
    }
    catch (err) {
        return res.status(400).json({
            message: 'Une erreur s\'est produite',
            error: err
        });
    }
};

//Get one cake
exports.getOneCake = async (req, res) => {
    try{
        let thisCake = await db.Cake.findById(req.params.id);
        return res.status(200).json(thisCake);
    }
    catch (err) {
        return res.status(400).json({
            message: 'Une erreur s\'est produite',
            error: err
        });
    }
};

//Update one cake
exports.updateOneCake = async(req, res) => {
    try {
        let cakeToUpdate = await db.Cake.findByIdAndUpdate(req.params.id, 
        {
            $set: req.body
        },
        {
            new: true
        });
    return res.status(200).json(cakeToUpdate);
    }
    catch (err) {
        return res.status(400).json({
        message: 'Oops could not find the cake',
        error: err
        });
    }
};

//Delete one cake
exports.deleteOneCake = async (req, res) => {
    try{
        await db.Cake.findByIdAndRemove(req.params.id);
        return res.status(200).json('Gateau bien supprimé');
    }
    catch (err) {
        return res.status(400).json({
            message: 'Une erreur s\'est produite',
            error: err
        });
    }
};