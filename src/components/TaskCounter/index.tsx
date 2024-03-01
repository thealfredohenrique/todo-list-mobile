import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskCounterProps {
  caption: string;
  counter: number;
  color: string;
}

export function TaskCounter({ caption, counter, color }: TaskCounterProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={{ ...styles.caption, color }}>{caption}</Text>

      <View style={styles.counter}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
    </View>
  );
}
