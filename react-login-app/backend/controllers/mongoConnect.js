const { MongoClient, ServerApiVersion } = require("mongodb");
const DB_URI_ATLAS =
  "mongodb+srv://areum:ahdtlf!237@cluster0.uf6iqgu.mongodb.net/?retryWrites=true&w=majority";
const uri = DB_URI_ATLAS;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = client;
