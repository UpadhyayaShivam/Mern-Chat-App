const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MongoUrl || process.env.mongolocal ,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
        }); 
        console.log(`Database connect: ${conn.connection.host }`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
    };
};

module.exports = connectDB;