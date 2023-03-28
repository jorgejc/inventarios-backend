const mongoose = require('mongoose');

const getConnection = async () => {

    try{
        const url = 'mongodb://user-bd:vmlMFi9GVaFScrGF@ac-mnutzym-shard-00-00.8o3ccjs.mongodb.net:27017,ac-mnutzym-shard-00-01.8o3ccjs.mongodb.net:27017,ac-mnutzym-shard-00-02.8o3ccjs.mongodb.net:27017/inventarios-test?ssl=true&replicaSet=atlas-147jrs-shard-0&authSource=admin&retryWrites=true&w=majority' ;
       
        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
       console.log(error);
    }
}

module.exports = {
    getConnection,
}