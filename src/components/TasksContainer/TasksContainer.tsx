import Task from "../Task/Task";
import { TaskType } from "@/types";

interface TaskContainerProps {
  tasks: TaskType []
}
const TasksContainer = ({tasks}:TaskContainerProps) => {
  return (
    <div className="container flex items-start flex-col p-4 h-full overflow-auto">
      {
      tasks.map((task, index) => {
        return <Task key={index} {...task} />;
      })
      }
    </div>
  );
};

export default TasksContainer;
