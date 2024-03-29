import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TaskCard } from "../../components/TaskCard";
import { TaskCounter } from "../../components/TaskCounter";
import { TaskForm } from "../../components/TaskForm";
import { Logo } from "../../assets/Logo";
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

  function handleAddTask(content: string) {
    const newTask: Task = {
      id: String(Date.now()) + String(Math.random()),
      isDone: false,
      content,
    };
    setTasks((currentValue) => [...currentValue, newTask]);
  }

  function handleToggleIsDoneTask(id: string, value: boolean) {
    setTasks((currentValue) =>
      currentValue.map((task) => ({
        ...task,
        isDone: task.id === id ? value : task.isDone,
      }))
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((currentValue) => currentValue.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Logo />
      </View>

      <TaskForm onSubmit={handleAddTask} />

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
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggleIsDone={handleToggleIsDoneTask}
              onDelete={handleDeleteTask}
            />
          )}
        />
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
