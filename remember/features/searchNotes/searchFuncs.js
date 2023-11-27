export function filterResults(filter, item) {
  if (item) {
    filter.category.push(item.category);
  }
  return { ...filter };
}
