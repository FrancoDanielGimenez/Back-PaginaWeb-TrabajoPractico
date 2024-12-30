import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    descripcion: { type: String, required: true },
    img: { type : String,required:true},
    precio: { type: Number, required: true,default:100 },
    contenido: { type: String, required: true },
    ishabilitado: { type: Boolean, required: true },
});

const Producto = mongoose.model("Producto", productoSchema);
export default Producto
