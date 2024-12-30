import express from "express";
import { getProductsController,getProductController,createProductController,updateProductController,deleteProductController}  from "../controller/controllerProducto.js";
import { authMiddleware,isAdmin,isUser } from "../middleware/authMiddleware.js";

const routeproductos = express.Router();

routeproductos.get("/",authMiddleware,getProductsController)
routeproductos.get("/:id",isUser,getProductController)
routeproductos.post("/",isAdmin,createProductController)
routeproductos.put("/:id",isAdmin,updateProductController)
routeproductos.delete("/:id",isAdmin,deleteProductController)    


export default routeproductos;
