


// const express = require('express');
// const { getAllDonors, createDonor, updateDonor } = require('../controller/donorController');

// const router = express.Router();

// router.get('/', getAllDonors);
// router.post('/', createDonor);
// router.put('/:id', updateDonor); // ✅ Add this for updating donors

// module.exports = router;


const express = require('express');
const { getAllDonors, createDonor, updateDonor, deleteDonor } = require('../controller/donorController'); // ✅ Import deleteDonor

const router = express.Router();

router.get('/', getAllDonors);
router.post('/', createDonor);
router.put('/:id', updateDonor);
router.delete('/:id', deleteDonor); // ✅ Add DELETE route

module.exports = router;
