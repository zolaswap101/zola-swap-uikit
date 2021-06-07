import { darkColors, lightColors } from "../../theme/colors";
import { WagyuToggleTheme } from "./types";

export const light: WagyuToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: WagyuToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
