const express = require('express');
const router = express.Router();
const handlersCakes = require('../handlers/cakes');

router
    .route('/')
    .post(handlersCakes.createCake)
    .get(handlersCakes.getAllCakes);

router
    .route('/:id')
    .get(handlersCakes.getOneCake)
    .put(handlersCakes.updateOneCake)
    .delete(handlersCakes.deleteOneCake);

module.exports = router;