export function filterResults(filter, item) {
  if (item && filter.category.includes(item.category) === false) {
    filter.category.push(item.category);
  }
  return { ...filter };
}
