const express = require('express');
const app = express();
const port =3000;
const path = require('path');
const cors = require("cors");
app.use(cors());


const mongoose = require('mongoose');
const Student = require('./models/info.js');

app.use(express.static(path.join(__dirname,"public"))); 
app.use(express.urlencoded({extended:true}));


main().then((res)=>{
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Student_info');
  await mongoose.connect('mongodb://127.0.0.1:27017/PYQs');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find({}); // Fetch all students from the database
        res.json(students); // Send the data as JSON
    } catch (err) {
        res.status(500).json({ message: "Error fetching data" });
    }

});
app.get('/api/pyqs', async (req, res) => {
    try {
        const students = await Student.find({}); // Fetch all students from the database
        res.json(students); // Send the data as JSON
    } catch (err) {
        res.status(500).json({ message: "Error fetching data" });
    }
});
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

