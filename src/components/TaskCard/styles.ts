import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.gray500,
  },
  content: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
    lineHeight: 20,
  },
});
