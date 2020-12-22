const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookRouter = ('./routes/book.router.js');
const genreRouter = ('./routes/genre.router.js');
const port = process.env.PORT || 5000;

/**--------- MIDDLEWARE -------------- */
app.use(bodyParser.json()); 
app.use(express.static('build'));

/** --------- ROUTES ----------------- */
app.use('/api/book', bookRouter);
app.use('/api/genre', genreRouter);

/** ---------- START SERVER --------- */
app.listen(port, function () {
    console.log('Listening on port: ', port);
});