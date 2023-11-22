// split date to date and time

// optimistic delete note
export function optimisticDelete(notes, noteId) {
  return notes.filter((note) => {
    if (note.id !== noteId) {
      return note;
    }
  });
}
