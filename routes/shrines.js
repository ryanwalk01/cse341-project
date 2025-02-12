const router = require('express').Router();
const shrineController = require('../controllers/shrines');
const validation = require('../middleware/validateShrine');

router.get('/', shrineController.allShrines);
router.get('/:id', shrineController.getShrine);
router.post('/', validation.shrine, shrineController.createShrine);
router.put('/:id', validation.shrine, shrineController.updateShrine);
router.delete('/:id', shrineController.deleteShrine);

module.exports = router;