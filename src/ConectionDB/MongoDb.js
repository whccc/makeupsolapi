const mongoose= require('mongoose');

  const ConnectionDb=async({host,port,dbName})=>{
    const uri=`mongodb://${host}:${port}/${dbName}`;
    await mongoose.connect(uri, { useNewUrlParser: true } );
    console.log('Base de datos iniciada con éxito.')
}

module.exports=ConnectionDb;