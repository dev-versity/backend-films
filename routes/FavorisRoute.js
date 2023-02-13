const FavorisRouter = require('express').Router();
const FavorisController = require('../controllers/FavorisController');

FavorisRouter.post('/create', FavorisController.add)

module.exports = FavorisRouter;