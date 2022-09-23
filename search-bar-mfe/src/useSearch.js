const SearchableItems = [
  {
    term: "Demo MFE",
  },
  {
    term: "Persistence Page",
  },
  {
    term: "Error Handling",
  },
  {
    term: "Notifications Application",
  },
  {
    term: "Customers MFE",
  },
];

export const useSearch = (value) => {
  if (!value) {
    return null;
  }
  //   Check in a list of items for a partial match
  const results = SearchableItems.filter(
    (item) => item.term.toLowerCase().indexOf(value) > -1
  );
  return results;
};
