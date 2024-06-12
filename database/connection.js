const mongoosee = require('mongoose');

const connection = async()=>{
  try {
    await mongoosee.connect('mongodb://localhost:27017/bd_socialnet')
    console.log("listo :3")
  } catch (error) {
    console.log("no se conecto")
    throw new error("no se ha podido conectar")
  }

}

module.exports = connection;