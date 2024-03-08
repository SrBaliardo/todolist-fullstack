const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const newTask = async (task) => {
    const {title} = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const [addedTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]);
    return {insertId: addedTask.insertId};
};

const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const {title, status} = task;
    const [updateTask] = await connection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    return updateTask;
};

module.exports = {
    getAll,
    newTask,
    deleteTask,
    updateTask
};