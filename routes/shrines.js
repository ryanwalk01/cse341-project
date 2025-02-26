const router = require('express').Router();
const shrineController = require('../controllers/shrines');
const validation = require('../middleware/validateShrine');

router.get('/', shrineController.allShrines);
router.get('/:id', shrineController.getShrine);
router.post('/', requiresAuth(), validation.shrine, shrineController.createShrine);
router.put('/:id', requiresAuth(), validation.shrine, shrineController.updateShrine);
router.delete('/:id', requiresAuth(), shrineController.deleteShrine);

module.exports = router;