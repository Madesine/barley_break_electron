export const Menu = {
  name: "Barley-Break",
  children: [
    {
      name: "Start",
      attributes: {},
    },
    {
      name: "Settings",
      children: [
        {
          name: "Field_Size",
          children: [
            {
              name: "3x3",
            },
            {
              name: "4x4",
            },
          ],
        },
        {
          name: "Method_Options",
          children: [{ name: "Numeric" }, { name: "Drag'n'Drop" }],
        },
      ],
    },
  ],
};
