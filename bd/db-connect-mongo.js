const mongoose = require('mongoose');

const getConnection = async () => {

    try{

        const url = 'mongodb://usuario-test:umuewA2r4KYgQnvM@ac-kywdwnj-shard-00-00.vs2swdm.mongodb.net:27017,ac-kywdwnj-shard-00-01.vs2swdm.mongodb.net:27017,ac-kywdwnj-shard-00-02.vs2swdm.mongodb.net:27017/inventarios-g?ssl=true&replicaSet=atlas-eikhsg-shard-0&authSource=admin&retryWrites=true&w=majority'

        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }
    

}

module.exports = {
    getConnection,
}