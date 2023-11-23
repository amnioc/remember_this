import { optimisticDelete } from "../helperFuncs";

//unit tests of helper functions

describe("optimisticDelete", () => {
  const testNotes = [
    { note: 1, id: 1 },
    { note: 2, id: 2 },
    { note: 3, id: 3 },
  ];

  test("should return error if no input provided", () => {
    const result = optimisticDelete();
    expect(typeof result).toBe("string");
  });

  test("should return empty array when notes list is empty", () => {
    const result = optimisticDelete([]);
    expect(result.length).toBe(0);
    expect(Array.isArray(result)).toBe(true);
  });

  test("returns notes array of unchanged length and new memory when invalid notesID", () => {
    const testID = 4;
    const result = optimisticDelete(testNotes, testID);
    expect(result.length).toBe(testNotes.length);
    expect(result).not.toBe(testNotes);
  });

  test("should return an array without note object with matching noteID ", () => {
    const testID = 2;
    const expected = [
      { note: 1, id: 1 },
      { note: 3, id: 3 },
    ];
    const result = optimisticDelete(testNotes, testID);
    expect(result).toEqual(expected);
  });

  test("does not mutate each note object", () => {
    const testNewNotes = [
      { note: 1, id: 1 },
      { note: 2, id: 2 },
      { note: 3, id: 3 },
    ];

    optimisticDelete(testNotes, 4);

    testNotes.forEach((note, index) => {
      expect(note).toEqual(testNewNotes[index]);
    });
  });
});
