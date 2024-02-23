import { View } from "react-native";
import { Logo } from "../../components/Logo";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Logo />
      </View>
    </View>
  );
}
