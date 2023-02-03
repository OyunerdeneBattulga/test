const DataModel = require("./model.js")

exports.createdata = async (request, response , next) => {
    try {
        const createData = await DataModel.create(request.body)
        response
        .status(201)
        .json({message: `new data create`, data:createData})
    } catch (error) {
        console.log(error)
    }
}
exports.getdata = async (request,response,next) => {
    const { id } = request.params;
    try{
        const data = await DataModel.findById(id);
        response.status(200).json({
            message:true , 
            data:data
        })
    }catch(error){
        return response.status(400).json({message:error , data:null})
    }
}


// for (let index = 0; index < array.length; index++) {
//     for (let index = 0; index < array.length; index++) {
        
        
//     }
    
// }

/*
1
1 2
1 2 3
1 2 3 4
1 2 3
1 2 
1
*/