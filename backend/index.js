const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Janhavi:Janhavi123@cluster0.dikjsg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/notes', {   
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api', taskRoutes);