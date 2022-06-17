export const tables = Array.from({ length: 27 }).map((value, i) => {
  return [
    {
      id: "first",
      value: 45000,
      date: "21.01.2022",
      user: "Anna",
      comment: "this is a comment",
    },
    {
      id: i,
      value: 100009,
      date: "21.01.2022",
      user: "Anna",
      comment: "another comment",
    },
  ];
});
