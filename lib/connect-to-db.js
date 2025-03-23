import mongoose from 'mongoose';

let cachedConnection = null;

export async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  //const connection = await mongoose.connect("mongodb://127.0.0.1:27017/trydb");
  
  //const connection = await mongoose.connect("mongodb://127.0.0.1:27017/airportsdb");
  
  //mongodb+srv://saintjohnmcgo:nhvikHhWjwUhgULw@cluster0.q9qat.mongodb.net/
  //mongodb+srv://ttjohninvest3:aRdx70ZblSpvdzfx@cluster0.wsod9.mongodb.net/onlineairportsdb
  //const connection = await mongoose.connect("mongodb+srv://saintjohnmcgo:nhvikHhWjwUhgULw@cluster0.q9qat.mongodb.net/airportsdbonline");
  
  //mongodb+srv://ttjohninvest3:aRdx70ZblSpvdzfx@cluster0.wsod9.mongodb.net/airportsdb?retryWrites=true&w=majority&appName=Cluster0
  //const connection = await mongoose.connect("mongodb+srv://ttjohninvest3:aRdx70ZblSpvdzfx@cluster0.wsod9.mongodb.net/onlineairportsdb");
  //
  const connection = await mongoose.connect("mongodb+srv://ttjohninvest3:aRdx70ZblSpvdzfx@cluster0.wsod9.mongodb.net/airportsdb?retryWrites=true&w=majority&appName=Cluster0");
  
  //const connection = await mongoose.connect("mongodb+srv://saintjohnmcgo:nhvikHhWjwUhgULw@cluster0.xidxxaj.mongodb.net/airportsdbonline");

  cachedConnection = connection;

  return connection;
}