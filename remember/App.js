import React from "react";
import HomePage from "./views/homepage/HomePage";
import NotesPage from "./views/NotesPage/NotesPage";

export default function App() {
  const [notes, setNotes] = React.useState([]);
  const [showNotes, setShowNotes] = React.useState(false);

  if (showNotes === false) {
    return (
      <HomePage
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        notes={notes}
        setNotes={setNotes}
      />
    );
  } else {
    return (
      <NotesPage
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        notes={notes}
        setNotes={setNotes}
      />
    );
  }
}
