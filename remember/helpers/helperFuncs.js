// split date to date and time

// optimistic delete note
export function optimisticDelete(notes, noteId) {
  return notes
    ? notes.filter((note) => {
        if (note.id !== noteId) {
          return note;
        }
      })
    : `there was an error, no notes provided`;
}
