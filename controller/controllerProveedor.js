import { getProveedor,getProveedores,createProveedor,updateProveedor,deleteProveedor } from "../service/serviceProveedor.js";

export const getProveedoresController  = async (req,res) => {

   try {
        const proveedores = await getProveedores();    
        res.status (200).json ({status:"success",msg: "Listado de Proveedores",data: proveedores,});
       
           
       }catch (error) {
        console.log (error);
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
       }

}

export const getProveedorController = async (req,res) => {
    try {
        const id = req.params.id;
        const proveedor = await getProveedor(id);
        if (!proveedor) {
            res.status (400).json ({status: "error",msg: "Proveedor no encontrado",data:{} });
       
           }else {
            res.status (200).json ({status:"success",msg: "Proveedor Seleccionado",data: proveedor,});
        }
       }catch (error) {
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
       }
} 

export const createProveedorController = async (req,res) => {
    try {
        const {nombre,fechaAlta} = req.body; 
        console.log (nombre,fechaAlta)
        
        if (!nombre || !fechaAlta) {
            res.status (400).json ({status: "error",msg: "Proveedor no encontrado",data:{} });
       
        }   
        
        const proveedor = await createProveedor({nombre,fechaAlta});
        res.status (200).json ({status:"success",msg: "Proveedor Creado",data: proveedor,});
        }catch (error) {
            res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    }
}

export const updateProveedorController = async(req,res) => {
    try {
        const {nombre,fechaAlta} = req.body;
        const id = req.params.id;
        
        if (!nombre || !fechaAlta) {  
           
            res.status (400).json ({status: "error",msg: "Faltan Datos",data:{} })
        }
         
            const proveedorActualizado = await updateProveedor(id,nombre,precio)
                    
           if (proveedorActualizado) {
            res.status (200).json ({status: "success",msg: "Proveedor Actualizado",data:proveedorActualizado })
           }else {
            res.status (400).json ({status:"error",msg: "No se Actualizo el Proveedor" ,data:{}})
           }
                   
        } catch (error) {
       console.log (error)
       res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    
       }
   
}

export const deleteProveedorController = async (req,res) => {
    try {
        const id = req.params.id;
        const proveedorBorrado = await deleteProveedor(id);
        if (proveedorBorrado) {
            res.status (200).json({status:"success", message:"proveedor borrado", data:proveedorBorrado})
        }else{
            return res.status(400).json({status:"error", message:"no se borro el proveedor", data:{}})
        }
       }catch (error)
        {
        console.log (error)
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
        }   
    
}