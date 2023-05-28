//import mongoose, { connection } from 'mongoose';



// const Connection = async(username , password)=>{
// try{
//    const URL = "mongodb+srv://sameermaurya_:${password}@inshort-clone.qw0qr8y.mongodb.net/?retryWrites=true&w=majority";
//    const URL = "mongodb+srv://sameermaurya_:${password}@inshort-clone.qw0qr8y.mongodb.net/?retryWrites=true&w=majority";
//    const URL = "mongodb+srv://sameermaurya_:${password}@inshort-clone.qw0qr8y.mongodb.net/?retryWrites=true&w=majority";

// //const URL1= `mongodb://${username}:${password}@ac-2qrndcp-shard-00-00.qw0qr8y.mongodb.net:27017,ac-2qrndcp-shard-00-01.qw0qr8y.mongodb.net:27017,ac-2qrndcp-shard-00-02.qw0qr8y.mongodb.net:27017/?ssl=true&replicaSet=atlas-mmxf97-shard-0&authSource=admin&retryWrites=true&w=majority`;
//    await mongoose.connect(URL,{useNewurlParser:true}); 
//    console.log('Database connected succesfully')  ;
// } catch(error){
//     console.log('Error while connecting with the database ', error);
// }

// } 
// export default Connection;


import mongoose from 'mongoose';

// Connection URL of your remote MongoDB instance
const MONGODB_URI = 'mongodb+srv://sameermaurya_:sameer@inshort-clone.qw0qr8y.mongodb.net/?retryWrites=true&w=majority';

// Create a function to establish the database connection
const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

// Export the mongoose connection
export default connection;