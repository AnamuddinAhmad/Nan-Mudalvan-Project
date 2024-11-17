const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BookStore')
  .then(() => {
    console.log('DB Connection successful');
  })
  .catch((error) => {
    console.error('No connection:', error);
  });
