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
});
