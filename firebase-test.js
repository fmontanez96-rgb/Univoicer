import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export async function guardarPruebaFirestore() {
  try {
    const referencia = await addDoc(collection(db, "test"), { nombre: "prueba" });
    console.log("Prueba Firebase guardada con ID:", referencia.id);
  } catch (error) {
    console.error("Error al guardar prueba en Firestore:", error);
  }
}
