import express from "express";
import { getProveedoresController,getProveedorController,createProveedorController,updateProveedorController,deleteProveedorController}  from "../controller/controllerProveedor.js";
import { authMiddleware,isAdmin,isUser } from "../middleware/authMiddleware.js";

const routeproveedores = express.Router();

routeproveedores.get("/",authMiddleware,getProveedoresController)
routeproveedores.get("/:id",isUser,getProveedorController)
routeproveedores.post("/",isAdmin,createProveedorController)
routeproveedores.put("/:id",isAdmin,updateProveedorController)
routeproveedores.delete("/:id",isAdmin,deleteProveedorController)    


export default routeproveedores;