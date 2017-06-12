const data = require('../../data.json');

module.exports = (req, res) => {
	const modelId = req.params.modelId * 1;
	const model = data.models.find(m => m.id === modelId);

	res.status(200).json({ model });
};

// Clean up

//module.exports = (req, res) => {
//	const model = req.model;
//
//	res.status(200).json({ model });
//};