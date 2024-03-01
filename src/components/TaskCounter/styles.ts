import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  caption: {
    fontSize: 14,
    fontWeight: "700",
  },
  counter: {
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    borderRadius: 9999,
  },
  counterText: {
    color: colors.gray200,
    fontSize: 12,
    fontWeight: "700",
  },
});
