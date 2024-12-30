import crypto from "crypto"
import Producto from "../model/modelProducto.js"


export const getProducts = async () => {
    const producto = await Producto.find();
    return producto
}

export const getProduct = async (id) => {
    const producto = await Producto.find({id:id});
    return producto;
    }


    export const createProduct = async ({title,descripcion,img,precio,contenido}) => {
        const producto = {
            id: crypto.randomUUID(),
            title: title ,
            descripcion: descripcion ,
            img: img ,  
            precio: precio ,
            contenido: contenido ,
            ishabilitado : true
        }
        const producto1 = await Producto.create(producto);
            return producto1;
        
    }

    export const updateProduct = async(id,title,descripcion,img,precio,contenido) =>  {

        const productoActualizado = await Producto.findOneAndUpdate({id},{title,descripcion,img,precio,contenido})
         return productoActualizado
         }
        
       

    export const deleteProduct = async (id) => {

        const productoBorrado = await Producto.findOneAndUpdate({id},{ishabilitado:false})
        return productoBorrado
        
     }
        
