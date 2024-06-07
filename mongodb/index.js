const express = require('express')

const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = async()=>{
       await client.connect();
       const db = await client.db('test_database_tmp');
       return db;
}

const insertData = async()=>{
       const db = await database();

       const adminCollection = await db.collection('admins');

       const response =  await adminCollection.insertOne({
              name:"sahil",
              password:'16868684947847@admin'
       });
       console.log(response);
};

// insertData();


const readData = async()=>{

       try{
              const db = await database();

              const collection = await db.collection('admins');
       
              const response =  await collection.find({}).toArray();
       
              console.log(response);
       }

       catch(err){
              console.log('err');
       }
      
};

readData();

const updateData = async()=>{

       try{
              const db = await database();
              const collection = await db.collection('admins');
              const updateResult = await collection.updateOne({ name: "admin1" }, { $set: { email:"admin@gmail.com" } });
              console.log('Updated documents =>', updateResult);
       }

       catch(err){
              console.log('err');
       }
      
};

// updateData();


const deleteData = async()=>{

       try{
              const db = await database();
              const collection = await db.collection('admins');
              const deleteResult = await collection.deleteOne({name:"admin1" });
              console.log('Deleted documents =>', deleteResult);
       }

       catch(err){
              console.log('err');
       }
      
};

// deleteData();

const app = express();

app.use(express.json());

app.listen(5000,()=>{
       console.log('server is running on port 5000');
})