require('../src/db/mongoose');
const User = require('../src/models/user');

// 5dafb9a3ae037305d9042871

User.findByIdAndUpdate('5dafb9a3ae037305d9042871', { age: 1 }).then((user) => {
    console.log(user)

    return User.countDocuments({ age:1 });
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})