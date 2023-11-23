import { optimisticDelete } from "../helperFuncs";

//unit tests of helper functions

describe("optimisticDelete", () => {
  test("should return error if no input provided", () => {
    const result = optimisticDelete();
    expect(typeof result).toBe("string");
  });

  test("should return empty array when notes list is empty", () => {
    const result = optimisticDelete([]);
    expect(result.length).toBe(0);
    expect(Array.isArray(result)).toBe(true);
  });

  test("returns notes array of unchanged length with invalid ID", () => {
    const testNotes = [
      { note: 1, id: 1 },
      { note: 2, id: 2 },
      { note: 3, id: 3 },
    ];
    const testID = 4;
    const result = optimisticDelete(testNotes, testID);
    expect(result.length).toEqual(testNotes.length);
  });
  // should return array of unchanged length if ID not found
  // should return array without ID
});
