const express = require('express'),
			multer = require('multer'),
			app = express();

const port = process.env.PORT || 3000;

// multer middleware
const storage = multer.memoryStorage(),
			upload = multer({ storage: storage });

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.post("/file-size", upload.single('fileUploaded'), (req, res) => {
	res.json({
		'size': req.file.size + ' bytes'
	});
})

app.listen(port);