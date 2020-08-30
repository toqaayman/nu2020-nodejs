let mongoose = require('mongoose')

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Online-store:Tokatoka12@cluster0.2sv4w.gcp.mongodb.net/Online-shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

let BookSchema = new mongoose.Schema({
  isbn: Number,
  Title: String,
  Publisher: String,
  year: {
    type: Date
  },
  Category: String,
  Price:{
    type: Number
  }
})

module.exports = mongoose.model('Book', BookSchema)