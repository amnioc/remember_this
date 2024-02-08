import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from "../../firebaseConfig copy";

export async function getAllNotes(setNotes) {
  const querySnapshot = await getDocs(
    query(collection(db, "notes"), orderBy("id", "desc"))
  );
  const allNotes = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  })
  return setNotes(allNotes)
}
