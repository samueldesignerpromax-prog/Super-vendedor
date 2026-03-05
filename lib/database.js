const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let client;
let db;

async function connect() {
  if (db) return db;
  
  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db('samueltech');
    console.log('✅ Conectado ao MongoDB');
    return db;
  } catch (error) {
    console.error('❌ Erro ao conectar:', error);
    throw error;
  }
}

module.exports = { connect };
