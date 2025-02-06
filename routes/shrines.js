const router = require('express').Router();
const shrineController = require('../controllers/shrines');

router.get('/', shrineController.allShrines);
router.get('/:id', shrineController.getShrine);
router.post('/', shrineController.createShrine);
router.put('/:id', shrineController.updateShrine);
router.delete('/:id', shrineController.deleteShrine);

module.exports = router;