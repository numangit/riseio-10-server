const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Course API server running');
});

app.get('/all-courses', (req, res) => {
    res.send(courses);
});

app.get('/coursedetails/:id', (req, res) => {
    const id = req.params.id;
    const requestedCourse = courseDetails.find(course => course.course_id == id);
    res.send(requestedCourse);
});

app.listen(port, () => {
    console.log('This is course API server', port);
})