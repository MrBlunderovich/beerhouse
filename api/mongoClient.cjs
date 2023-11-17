const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
//const uri = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASS}@cluster0.vkwilwa.mongodb.net/?retryWrites=true&w=majority`;
const uri = process.env.MDB_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db(process.env.MDB_USER).command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function logCollection(collectionName) {
  try {
    await client.connect();
    const database = client.db();
    const results = await database[collectionName].find();
    console.log(results);
  } finally {
    await client.close();
  }
}
//logCollection("blog").catch(console.dir);

module.exports = client;
