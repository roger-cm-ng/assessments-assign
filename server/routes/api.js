import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const Api = express.Router();
const Schema = mongoose.Schema;
const mongodbUri = 'mongodb://ffx:ffx123@ds111748.mlab.com:11748/heroku_4fv3kgzm';

Api.use(cors());

mongoose.connect(mongodbUri);

const pageSchema = new Schema({
	studentPageName: String,
	teacherPageName: String,
	author: String,
	type: String,
	typeData: Object,
	grade: String,
	topic: String,
	subTopic: String,
	created: String,
	status: String,
	modules: Array
});

const Pages = mongoose.model('pages', pageSchema);

Api.get('/pages', (req, res) => {
  Pages.find()
    .then((results) => {
      res.json({
        status: 200,
        results
      });
    })
});

Api.get('/pages/:id', (req, res) => {
	Pages.findOne({ _id: req.params.id })
		.then((obj) => {
			res.json({
				status: 200,
				results: obj
			});
		})
});

Api.post('/pages', (req, res) => {
	const item = {
		studentPageName: req.body.studentPageName,
		teacherPageName: req.body.teacherPageName,
		author: req.body.author,
		type: req.body.type,
		typeData: req.body.typeData,
		grade: req.body.grade,
		topic: req.body.topic,
		subTopic: req.body.subTopic,
		created: req.body.created,
		status: req.body.status,
		modules: req.body.modules
  }

	const data = new Pages(item);

  data.save((err, pages) => {
    Pages.find()
      .then((arr) => {
				let content = {};
				const page = arr.find((i) => i.created === req.body.created);
        res.json({
          status: 200,
          results: page
        });
      })
			.then()
  });
});

Api.put('/pages', (req, res) => {
	const item = {
		_id: req.body._id,
		studentPageName: req.body.studentPageName,
		teacherPageName: req.body.teacherPageName,
		author: req.body.author,
		type: req.body.type,
		typeData: req.body.typeData,
		grade: req.body.grade,
		topic: req.body.topic,
		subTopic: req.body.subTopic,
		created: req.body.created,
		status: req.body.status,
		modules: req.body.modules
  }

	const data = new Pages(item);

	Pages.findByIdAndUpdate(req.body._id, data)
		.then((arr) => {
			res.json({
				status: 200,
				results: arr
			});
		})
});

Api.delete('/pages/:id', (req, res) => {
	Pages.findByIdAndRemove({ _id: req.params.id })
		.then((obj) => {
			res.json({
				status: 200,
				results: obj
			});
		})
});

export default Api;
