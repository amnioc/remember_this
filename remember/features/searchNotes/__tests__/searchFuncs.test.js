import { filterResults } from "../searchFuncs";

// should return original filter object when no item chosen
describe("filterResults", () => {
  it("should return a new unchanged filter object, in memory reference, when no filter item selected", () => {
    var testFilter = { category: [], date: 0, text: "" };
    const expected = { category: [], date: 0, text: "" };
    expect(filterResults(testFilter)).not.toBe(testFilter);
    expect(filterResults(testFilter)).toEqual(expected);
  });

  it("should add one category to filter object array", () => {
    var testFilter = { category: [], date: 0, text: "" };
    const testItem = { id: 1, category: "Hobbies" };
    const expected = { category: ["Hobbies"], date: 0, text: "" };
    const result = filterResults(testFilter, testItem);
    expect(result).toEqual(expected);
  });

  it("should add two categories to filter object array in succession", () => {
    var testFilter = { category: [], date: 0, text: "" };
    const testItem = { id: 1, category: "Hobbies" };
    const secondTestItem = { id: 2, category: "Holiday" };
    const expected = { category: ["Hobbies", "Holiday"], date: 0, text: "" };
    const result = filterResults(testFilter, testItem);
    const finalResult = filterResults(testFilter, secondTestItem);
    expect(finalResult).toEqual(expected);
  });
});
