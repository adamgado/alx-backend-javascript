const studentcount = require('./3-read_file_async');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const studentslist = await studentcount(process.argv.slice(2)[0]);
    res.send(`${msg}${studentslist.join('\n')}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});
app.listen(1245, () => {});
module.exports = app;
