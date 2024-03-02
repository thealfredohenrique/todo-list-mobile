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
