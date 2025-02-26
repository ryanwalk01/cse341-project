const router = require('express').Router();
const towerController = require('../controllers/towers');
const validation = require('../middleware/validateTower');
const { requiresAuth } = require('express-openid-connect');

router.get('/', towerController.allTowers);
router.get('/:id', towerController.getTower);
router.post('/', requiresAuth(), validation.tower, towerController.createTower);
router.put('/:id', requiresAuth(), validation.tower, towerController.updateTower);
router.delete('/:id', requiresAuth(), towerController.deleteTower);

module.exports = router;