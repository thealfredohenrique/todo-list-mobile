import { TextInput, TouchableOpacity, View } from "react-native";
import { Logo } from "../../assets/Logo";
import { PlusCircle } from "../../assets/PlusCircle";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
}
