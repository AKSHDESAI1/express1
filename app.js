import express from 'express';
import router from './routes/web.js';
const app = express();
const PORT = process.env.PORT || 3000;

//Set Template Engine
app.set('view engine', 'ejs')

//Load Routes
app.use('/', router)

// Connect Static Files 
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})