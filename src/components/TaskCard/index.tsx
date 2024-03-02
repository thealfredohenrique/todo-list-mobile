import { Text, TouchableOpacity, View } from "react-native";
import { CheckCircle, Circle, Trash } from "../../assets/icons";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

interface Task {
  id: string;
  isDone: boolean;
  content: string;
}

interface TaskCardProps {
  task: Task;
  onToggleIsDone: (id: string, value: boolean) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggleIsDone, onDelete }: TaskCardProps) {
  function handleToggleIsDone() {
    onToggleIsDone(task.id, !task.isDone);
  }

  function handleDelete() {
    onDelete(task.id);
  }

  return (
    <View
      style={{
        ...styles.wrapper,
        ...styles[task.isDone ? "checked" : "unchecked"],
      }}
    >
      <TouchableOpacity onPress={handleToggleIsDone}>
        {task.isDone ? (
          <CheckCircle size={20} color={colors.purpleDark} />
        ) : (
          <Circle size={20} color={colors.blue} />
        )}
      </TouchableOpacity>

      <Text
        style={{
          ...styles.content,
          textDecorationLine: task.isDone ? "line-through" : "none",
        }}
      >
        {task.content}
      </Text>

      <TouchableOpacity onPress={handleDelete}>
        <Trash size={20} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  );
}
