export const columnData = {
  columns: [
    {
      name: "Todo",
      tasks: [
        {
          title: "landing page",
          status: "In Progress",
        },
      ],
    },
    {
      name: "In Progress",
      tasks: [
        {
          title: "task 1",
          status: "In Progress",
        },
      ],
    },
    {
      name: "Done",
      tasks: [
        {
          title: "task2",

          status: "Done",
        },
      ],
    },
  ],
};
localStorage.setItem("data", JSON.stringify(columnData));
