import { createTheme, Text, MantineThemeOverride } from "@mantine/core";
import {
  customPrimary,
  textSecondary,
  textColors,
  customBlue,
} from "../constants/customColor";

export const theme: MantineThemeOverride = createTheme({
  fontFamily: "DM Sans, sans-serif",
  headings: { fontFamily: "DM Sans, sans-serif" },

  colors: {
    customPrimary, // Your orange palette
    textSecondary, // Your gray palette
    customBlue, // Your blue palette (newly added)
  },

  // Set the default primary color to use throughout the app
  primaryColor: "customPrimary",

  // Set which shade (0-9) of the primary color to use by default
  // 9 is the darkest shade in your customPrimary palette (#9c3e0d)
  primaryShade: 9,

  components: {
    // Override Text component to have a default gray color
    Text: Text.extend({
      defaultProps: {
        // This sets all <Text> components to use textSecondary.7 by default
        color: "textSecondary.7",
      },
    }),
  },

  // Define additional theme variables that aren't part of Mantine's default theme
  other: {
    textColor: textColors.primary, // "#F16722" - Brand Orange
    textSecondaryColor: textColors.secondary, // "#667185" - medium-dark gray
  },

  cursorType: "pointer",
});
