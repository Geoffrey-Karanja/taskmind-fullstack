export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${
      task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            task.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {task.completed && '✓'}
        </button>
        <span className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
      >
        🗑️
      </button>
    </div>
  );
}
