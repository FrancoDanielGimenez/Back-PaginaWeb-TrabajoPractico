import mongoose from "mongoose";

const ProveedorSchema = new mongoose.Schema({
    id: {type: String, require:true, unique:true},
    nombre: {type:String, require:true},
    fechaAlta: {type:Date, require:true},
    isHabilitado: {type:Boolean,default:true}
})

const Proveedor = mongoose.model("Proveedor", ProveedorSchema)
export default Proveedor