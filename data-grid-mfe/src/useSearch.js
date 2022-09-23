const SearchableItems = [
  {
    term: "Demo MFE",
    link: "/demo",
  },
  {
    term: "Persistence Page",
    link: "/demo/persistence",
  },
  {
    term: "Error Handling",
    link: "/demo/error",
  },
  {
    term: "Notifications Application",
    link: "/notifications",
  },
  {
    term: "Customers MFE",
    link: "/customers",
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
