const cors = require('cors')
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('../config/connection')
const flash = require('connect-flash')
const session = require('express-session')
const routes = require('./routes/index.route')
    //load env variables
dotenv.config({
    path: './config/config.env'
})

//Connect to database
connectDB()

const app = express()

app.use(cors())


const publicDirPath = path.join(__dirname, '../public')

app.enable('trust proxy');
app.use(express.static(publicDirPath));

app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: false,
    limit: '50mb'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(flash());

//Global Variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

//Router
app.get('/', async(req, res) => {
    res.send('Welcome')
});

app.use('/', routes)


const PORT = process.env.PORT || 3030

const server = app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

//handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message} ${err}`);
    //Close server & exit process
    server.close(() => process.exit(1))
})