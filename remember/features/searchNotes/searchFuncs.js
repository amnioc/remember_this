export function filterResults(filter, item) {
  filter.category.push(item.category);
  console.log(filter);

  return { ...filter };
}
