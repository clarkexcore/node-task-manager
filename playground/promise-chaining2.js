require('../src/db/mongoose');
const Task = require('../src/models/task');

// 5db8a6873ccae76f44002857

// Task.findByIdAndRemove('5db8a6873ccae76f44002857').then((taks) => {
//     console.log(taks);
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

const deleteTaskAndCount = async (id, completed) => {
    const deleteTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed});
    return count;
}

deleteTaskAndCount('5dafb524e105a0043b9d3799', false).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})