import { createTheme, Text } from "@mantine/core";
import { customPrimary } from "../constants/customColor";

export const theme = createTheme({
  fontFamily: "Asap, sans-serif",
  headings: { fontFamily: "Asap, sans-serif " },
  colors: {
    customPrimary,
  },
  primaryColor: "customPrimary",
  primaryShade: 9,
  components: {
    Text: Text.extend({
      defaultProps: {
        color: "#667085",
      },
    }),
  },
  other: {
    textColor: "#111943",
  },
  cursorType: "pointer",
});
