var express = require('express');
var router = express.Router();
var todosCtrl = require('../../controllers/api/todos');

/* GET /api/todos */
router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);
router.put('/:id', todosCtrl.update);

module.exports = router;
