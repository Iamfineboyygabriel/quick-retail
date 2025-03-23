// customPrimary: Orange-based palette (from lightest to darkest)
export const customPrimary: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] = [
  "#fff0e5", // 0: Lightest orange
  "#fde1d2", // 1: Very light orange
  "#f3c1a7", // 2: Light orange
  "#eb9f78", // 3: Light-medium orange
  "#e58250", // 4: Medium orange
  "#e17036", // 5: Medium-strong orange -
  "#dc5f20", // 6: Strong orange -
  "#c7551c", // 7: Strong-dark orange -
  "#b24a16", // 8: Dark orange -
  "#9c3e0d", // 9: Darkest orange
  "#F16722", // 10: Brand orange -
];

// textSecondary: Gray-based palette (from lightest to darkest)
export const textSecondary: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] = [
  "#ecedf0", // 0: Lightest gray -
  "#d9dbe1", // 1: Very light gray -
  "#c5c9d3", // 2: Light gray -
  "#b2b7c4", // 3: Light-medium gray -
  "#9ea5b6", // 4: Medium gray -
  "#8a94a7", // 5: Medium-dark gray -
  "#778398", // 6: Dark gray -
  "#667185", // 7: Darker gray -
  "#5a6476", // 8: Very dark gray -
  "#1D2739", // 9: Darkest gray -
];

export const textColors = {
  primary: "#F16722", // Brand Orange -
  secondary: "#667185", // Same as textSecondary[7] - Use for body text
};

// Example of adding a new blue color palette
export const customBlue: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] = [
  "#e6f7ff", // 0: Lightest blue - backgrounds, highlights
  "#bae7ff", // 1: Very light blue - subtle elements, backgrounds
  "#91d5ff", // 2: Light blue - secondary elements, info backgrounds
  "#69c0ff", // 3: Light-medium blue - info elements
  "#40a9ff", // 4: Medium blue - links, interactive elements
  "#1890ff", // 5: Standard blue - primary buttons, focus states
  "#096dd9", // 6: Medium-dark blue - hover states for primary elements
  "#0050b3", // 7: Dark blue - active states
  "#003a8c", // 8: Very dark blue - text on light backgrounds
  "#002766", // 9: Darkest blue - high emphasis text or elements
];
