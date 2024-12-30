
import { getProduct,getProducts,createProduct,updateProduct,deleteProduct } from "../service/serviceProducto.js";

export const getProductsController  = async (req,res) => {

   try {
        const productos = await getProducts();    
        res.status (200).json ({status:"success",msg: "Listado de Productos",data: productos,});
       
           
       }catch (error) {
        console.log (error);
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
       }

}

export const getProductController = async (req,res) => {
    try {
        const id = req.params.id;
        const producto = await getProduct(id);
        if (!producto) {
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
       
           }else {
            res.status (200).json ({status:"success",msg: "Producto Seleccionado",data: producto,});
        }
       }catch (error) {
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
       }
} 

export const createProductController = async (req,res) => {
    try {
        const {title,descripcion,img,precio,contenido} = req.body; 
        console.log (title,descripcion,img,precio,contenido)
        
        if (!title || !descripcion || !img || !precio || !contenido) {
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
       
        }   
        
        const producto = await createProduct({title,descripcion,img,precio,contenido});
        res.status (200).json ({status:"success",msg: "Producto Creado",data: producto,});
        }catch (error) {
            console.log (error)
            res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    }
}

export const updateProductController = async(req,res) => {
    try {
        const {title,descripcion,img,precio,contenido} = req.body;
        const id = req.params.id;
        
        if (!title || !descripcion || !img || !precio || !contenido) {  
           
            res.status (400).json ({status: "error",msg: "Faltan Datos",data:{} })
        }
         
            const productoActualizado = await updateProduct(id,title,descripcion,img,precio,contenido)
                    
           if (productoActualizado) {
            res.status (200).json ({status: "success",msg: "Producto Actualizado",data:productoActualizado })
           }else {
            res.status (400).json ({status:"error",msg: "No se Actualizo el Producto" ,data:{}})
           }
                   
        } catch (error) {
       console.log (error)
       res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    
       }
   
}

export const deleteProductController = async (req,res) => {
    try {
        const id = req.params.id;
        const productoBorrado = await deleteProduct(id);
        if (productoBorrado) {
            res.status (200).json({status:"success", message:"producto borrado", data:productoBorrado})
        }else{
            return res.status(400).json({status:"error", message:"no se borro el producto", data:{}})
        }
       }catch (error)
        {
        console.log (error)
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
        }   
    
}