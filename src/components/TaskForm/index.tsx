import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "../../assets/icons";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

interface TaskFormProps {
  onSubmit: (content: string) => void;
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [content, setContent] = useState("");

  function handleSubmit() {
    onSubmit(content);
    setContent("");
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
        value={content}
        onChangeText={setContent}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <PlusCircle size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}
