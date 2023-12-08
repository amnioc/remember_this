import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../../firebaseConfig copy";
import { getAllNotes } from "../notesList/getNotesFuncs";

export function filterResults(filter, item) {
  if (item && filter.category.includes(item.category) === false) {
    filter.category.push(item.category);
  } else if (item && filter.category.includes(item.category)) {
    const catLocation = filter.category.indexOf(item.category);

    filter.category.splice(catLocation, 1);
  }
  return { ...filter };
}

export async function filterNotes(filter, setNotes) {
  var categories = filter.category;
  if (categories.length === 0) {
    return getAllNotes(setNotes);
  }

  const queryFilterSnapshot = await getDocs(
    query(
      collection(db, "notes"),
      where("category", "array-contains-any", categories)
    )
  );

  const filteredNotes = [];
  queryFilterSnapshot.forEach((doc) => {
    filteredNotes.push({ id: doc.id, ...doc.data() });
  });

  setNotes(filteredNotes);
}
