import db from "./firebaseConfig copy";
import React from "react";
import HomePage from "./views/homepage/HomePage";
import NotesPage from "./views/viewNotes/NotesPage";

export default function App() {
  const [currentNotes, setCurrentNotes] = React.useState([]);
  const [text, setText] = React.useState("");
  const [showNotes, setShowNotes] = React.useState(false);

  const [categories, setCategories] = React.useState([]);

  if (showNotes === false) {
    return (
      <HomePage
        text={text}
        setText={setText}
        categories={categories}
        setCategories={setCategories}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        currentNotes={currentNotes}
        setCurrentNotes={setCurrentNotes}
      />
    );
  } else {
    return (
      <NotesPage
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        currentNotes={currentNotes}
        setCurrentNotes={setCurrentNotes}
      />
    );
  }
}
