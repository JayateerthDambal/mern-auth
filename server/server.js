const express = require("express")
const morgan = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require("dotenv").config()
const app = express();
// Connect to DB
mongoose.connect('url', {
    useNewUrlParser: true,
    findAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("DB Connected!"))
.catch(err => console.log('DB CONNECTION ERROR: ', err))
// Route Import
const authRoutes = require("./routes/auth");

// App Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // Allow all origins

// Restricting API Access from only certain domain 
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: `http://localhost:3000`
    }))
}

// Middlewares
app.use('/api', authRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API Server is running on ${port} - ${process.env.NODE_ENV}`)
});

