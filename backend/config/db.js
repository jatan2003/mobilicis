
const mongoose = require('mongoose')
const url = 'mongodb+srv://jast:sourabh2001jatan2003aditya2002@cluster0.ittj5gm.mongodb.net/mobilicis?retryWrites=true&w=majority'

const connectToDatabase = () => {
    
    mongoose.connect(
        url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      }
    )
    .then(() => {
        
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });

}
module.exports = connectToDatabase