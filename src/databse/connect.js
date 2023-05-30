const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.w3wt6w2.mongodb.net/database?retryWrites=true&w=majority`
            );
        console.log('Conexão com o BD realizada com sucesso');
        } catch (error){
            console.log('Ocorreu erro ao se conectar com o banco de dados: ', error);
        }
};

module.exports = connectToDatabase;