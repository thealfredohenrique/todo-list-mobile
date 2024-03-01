import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TaskCounter } from "../../components/TaskCounter";
import { Logo } from "../../assets/Logo";
import { PlusCircle } from "../../assets/PlusCircle";
import clipboard from "../../assets/clipboard.png";
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

      {tasks.length ? (
        <></>
      ) : (
        <View style={styles.empty}>
          <Image style={styles.clipboard} source={clipboard} />

          <View>
            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
