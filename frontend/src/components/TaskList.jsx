import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Tasks ({tasks.length})</h2>
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskItem 
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
