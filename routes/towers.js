const router = require('express').Router();
const towerController = require('../controllers/towers');

router.get('/', towerController.allTowers);
router.get('/:id', towerController.getTower);
router.post('/', towerController.createTower);
router.put('/:id', towerController.updateTower);
router.delete('/:id', towerController.deleteTower);

module.exports = router;