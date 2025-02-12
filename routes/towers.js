const router = require('express').Router();
const towerController = require('../controllers/towers');
const validation = require('../middleware/validateTower');

router.get('/', towerController.allTowers);
router.get('/:id', towerController.getTower);
router.post('/', validation.tower, towerController.createTower);
router.put('/:id', validation.tower, towerController.updateTower);
router.delete('/:id', towerController.deleteTower);

module.exports = router;