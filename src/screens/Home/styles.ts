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
    marginHorizontal: 16,
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
    paddingVertical: 24,
    marginHorizontal: 16,
  },
  empty: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginHorizontal: 16,
    paddingHorizontal: 24,
    paddingVertical: 64,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray400,
  },
  clipboard: {
    height: 56,
    width: 56,
  },
  emptyTitle: {
    color: colors.gray300,
    fontWeight: "700",
    textAlign: "center",
  },
  emptyText: {
    color: colors.gray300,
    textAlign: "center",
  },
});
