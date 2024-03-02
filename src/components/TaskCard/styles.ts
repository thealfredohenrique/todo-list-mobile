import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  content: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
    lineHeight: 20,
  },
  unchecked: {
    borderColor: colors.gray400,
  },
  checked: {
    borderColor: colors.gray500,
    opacity: 0.7,
  },
});
