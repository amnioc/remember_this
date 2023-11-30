import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebaseConfig copy";

export function filterResults(filter, item) {
  if (item && filter.category.includes(item.category) === false) {
    filter.category.push(item.category);
  }
  return { ...filter };
}

export async function filterNotes(filter, setNotes) {
  var categories = filter.category;
  const querySnapshot = await getDocs(
    query(
      collection(db, "notes"),
      where("category", "array-contains-any", categories)
    )
  );
  const filteredNotes = [];
  querySnapshot.forEach((doc) => {
    filteredNotes.push({ id: doc.id, ...doc.data() });
    // console.log(doc.data());
  });
  setNotes(filteredNotes);
}
