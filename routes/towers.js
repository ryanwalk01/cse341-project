const router = require('express').Router();
const towerController = require('../controllers/towers');
const validation = require('../middleware/validateTower');

router.get('/', towerController.allTowers);
router.get('/:id', towerController.getTower);
router.post('/', requiresAuth(), validation.tower, towerController.createTower);
router.put('/:id', requiresAuth(), validation.tower, towerController.updateTower);
router.delete('/:id', requiresAuth(), towerController.deleteTower);

module.exports = router;