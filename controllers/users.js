const UsersService = require ('../services/users.js');

module.exports = {
    getAllUsers :  async (req, res, next) => {
        try{
            const users = await UsersService.getAllUsers();
            res.status(200).json({users})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    },
    getUser : async(req, res, next) => {
        try{
            const user = await UsersService.getUser(req.params.id);
            res.status(200).json({user})
        } catch(err){
            res.status(500).json({"message": `Error al obtener el usuario. Err: ${err}`})
        }
    },
    
    addUser : async(req, res, next) => {
        try{
            const user = await UsersService.addUser(req.body);
            res.status(200).json({user})
        } catch(err){
            res.status(500).json({"message": `Error al añadir el usuario. Err: ${err}`})
        }
    },

    updateUser : async(req, res, next) => {
        try{
            const user = await UsersService.updateUser(req.params.id, req.body);
            res.status(200).json({user})
        } catch(err){
            res.status(500).json({"message": `Error al actualizar el usuario. Err: ${err}`})
        }
    },

    deleteUser : async(req, res, next) => {
        try{
            const user = await UsersService.deleteUser(req.params.id);
            res.status(200).json({user})
        } catch(err){
            res.status(500).json({"message": `Error al eliminar el usuario. Err: ${err}`})
        }
    }
};
