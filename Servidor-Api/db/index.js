const  ambientes= require("../resources/ambientes");
const  escalas= require("../resources/escala");
module.exports={
    getAmbientes:function(){
        console.log("solicitud de ambientes");
        return ambientes;
    },
    getEscalas:function(){
        console.log("solicitud de escalas");
        return escalas ;
    },
    getUserById:function(id){
        console.log("index js db solo user");
        return users.filter(user=>user._id===id);
    }
};