export const theme: ThemeType = {
  colors: {
    primary: "#0F1624",
    secondary:
      "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
    white: "#FFFFFF",
    black: "#000000",
    dark: "#0F1624",
    grey: "#BCBCBC",
    darkGray: "#162950;",
  },
  fontSizes: {
    small: "1rem",
    medium: "1.2rem",
    large: "1.4rem",
    XLarge: "1.6rem",
    XXLarge: "2rem",
    XXXLarge: "2.5rem",
  },
  fontWeights: {
    light: "300",
    regular: "400",
    bold: "600",
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
    xLarge: "2rem",
    xxLarge: "5rem",
    round: "50%",
  },
};

interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    dark: string;
    black: string;
    grey: string;
    darkGray: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    XLarge: string;
    XXLarge: string;
    XXXLarge: string;
  };
  fontWeights: {
    light: string;
    regular: string;
    bold: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
    round: string;
  };
}
