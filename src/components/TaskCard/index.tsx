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
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        {task.isDone ? (
          <CheckCircle size={20} color={colors.purpleDark} />
        ) : (
          <Circle size={20} color={colors.blue} />
        )}
      </TouchableOpacity>

      <Text style={styles.content}>{task.content}</Text>

      <TouchableOpacity>
        <Trash size={20} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  );
}
