const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();


DB_USERNAME=process.env.DB_USERNAME;
DB_PASSWORD=process.env.DB_PASSWORD;

const db_link=`mongodb+srv://mern-bookstore:wYVEMluwCBEHJY0x@cluster0.kj0yurr.mongodb.net/?appName=Cluster0`;

const connectionWithDB=()=>{
    
mongoose
.connect( db_link, { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(db){
    console.log("__ DB CONNECTED __");
})
.catch(function(err){
    console.log(err);
})

}

module.exports= connectionWithDB;
