import crypto from "crypto"
import Proveedor from "../model/modelProveedor.js"


export const getProveedores = async () => {
    const proveedor = await Proveedor.find();
    return proveedor
}

export const getProveedor = async (id) => {
    const proveedor = await Proveedor.find({id:id});
    return proveedor;
    }


    export const createProveedor = async ({nombre,fechaAlta}) => {
        const proveedor = {
            id: crypto.randomUUID(),
            nombre: nombre ,
            fechaAlta: fechaAlta ,
            ishabilitado : true
        }
        const proveedor1 = await Proveedor.create(proveedor);
            return proveedor1;
        
    }

    export const updateProveedor = async(id,nombre,fecAlta) =>  {

        const proveedorActualizado = await Proveedor.findOneAndUpdate({id},{nombre,fecAlta})
         return proveedorActualizado
         }
        
       

    export const deleteProveedor = async (id) => {

        const proveedorBorrado = await Proveedor.findOneAndUpdate({id},{ishabilitado:false})
        return proveedorBorrado
        
     }
        
