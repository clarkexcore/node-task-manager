const express = require('express');
require('./db/mongoose');
const bcrypt = require('bcryptjs');

const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port, () => {
    console.log(`Server is up on Port: ${port}`);
})

// const myFunction = async () => {
//     const password = "Red12345!";
//     const hashedPassword = await bcrypt.hash(password, 8);

//     console.log(hashedPassword);
//     console.log(password);

//     const isMatch = await bcrypt.compare('Red13345!', hashedPassword);

//     console.log(isMatch);
// }

// myFunction();