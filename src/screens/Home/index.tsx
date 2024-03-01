import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { TaskCounter } from "../../components/TaskCounter";
import { Logo } from "../../assets/Logo";
import { PlusCircle } from "../../assets/PlusCircle";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

interface Task {
  id: string;
  isDone: boolean;
  content: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createdTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;

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

      <View style={styles.info}>
        <TaskCounter
          caption="Criadas"
          counter={createdTasks}
          color={colors.blue}
        />
        <TaskCounter
          caption="Concluídas"
          counter={completedTasks}
          color={colors.purple}
        />
      </View>
    </View>
  );
}
