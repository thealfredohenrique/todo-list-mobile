import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  header: {
    height: 200,
    backgroundColor: colors.gray700,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    transform: [{ translateY: -26 }],
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray700,
    borderRadius: 8,
    height: 52,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    height: 52,
    width: 52,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.blueDark,
    color: colors.gray100,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
