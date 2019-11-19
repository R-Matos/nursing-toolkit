const router = require('express').Router();
let ShiftPattern = require('../models/shiftpattern.model')

//First end point handling http requests on /users/ url path
//Results returned in promise (in json format)
router.route('/').get((req, res) => {
	ShiftPattern.find()
	.then(shiftpatterns => res.json(shiftpatterns))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
	const uuid = req.body.uuid;
	const timeOfDay = req.body.timeOfDay;
	const startTime = req.body.startTime;
	const endTime = req.body.endTime;

	const newShiftpattern = new ShiftPattern({
		uuid,
		timeOfDay,
		startTime,
		endTime
	});

	newShiftpattern.save()
	.then(() => res.json('ShiftPattern Added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
	ShiftPattern.findById(req.params.uuid)
	.then(exercise => res.json(exercise))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	ShiftPattern.findByIdAndDelete(req.params.uuid)
	.then(exercise => res.json(exercise))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').get((req, res) => {
	ShiftPattern.findById(req.params.id)
	.then(shiftpattern => {
		shiftpattern.uuid = req.body.uuid;
		shiftpattern.timeOfDay = req.body.timeOfDay;
		shiftpattern.startTime = req.body.startTime;
		shiftpattern.endTime = req.body.endTime;

		shiftpattern.save()
		.then(() => res.json('Shiftpattern updated!'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

module.export = router;
