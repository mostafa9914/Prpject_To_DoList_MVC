const router = require('express').Router();
const tasksController = require('../Controllers/tasks')

// Find all Tasks
router.get('/' , tasksController.index);
// Create anew tasks
router.post('/create' , tasksController.crate);
// Update a tsaks
router.get('/update/:id',tasksController.edit);
router.put('/update/:id',tasksController.update);
// Delete a tasks
router.delete('/delete/:id' , tasksController.delete);

module.exports = router;