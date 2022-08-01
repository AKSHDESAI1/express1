import express from 'express';
import router from './routes/web.js';
import { join } from 'path';
const app = express();
const PORT = process.env.PORT || 3000;

//Set Template Engine
app.set('view engine', 'ejs')

//Load Routes
app.use('/', router)

// Connect Static Files 
app.use(express.static(join(process.cwd(), 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})