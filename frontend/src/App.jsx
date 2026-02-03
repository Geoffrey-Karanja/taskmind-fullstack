import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  // ALL tasks managed here
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React setup', completed: true },
    { id: 2, title: 'Install Tailwind CSS', completed: true },
    { id: 3, title: 'Deploy to Vercel', completed: false },
    { id: 4, title: 'Set up Spring Boot backend', completed: false },
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Organize Your Life, <span className="text-blue-600">One Task at a Time</span>
          </h1>
          <p className="text-gray-600">
            AI-powered task manager that helps you stay focused and productive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskList 
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-3">📊 Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Tasks:</span>
                  <span className="font-bold">{tasks.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed:</span>
                  <span className="font-bold text-green-600">
                    {tasks.filter(t => t.completed).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pending:</span>
                  <span className="font-bold text-orange-600">
                    {tasks.filter(t => !t.completed).length}
                  </span>
                </div>
                <div className="pt-3 mt-3 border-t">
                  <span className="text-gray-600">Productivity:</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ 
                        width: `${tasks.length > 0 ? (tasks.filter(t => t.completed).length / tasks.length) * 100 : 0}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold mb-3">✨ Coming Soon</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">🤖</span> AI auto-categorization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">👥</span> Team collaboration
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📱</span> Mobile app
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📅</span> Calendar integration
                </li>
              </ul>
              <button className="mt-4 w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Roadmap
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-3">⚡ Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition">
                  📋 Export tasks
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-300 transition">
                  🎯 Set daily goal
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-300 transition">
                  🔔 Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm pb-6">
        <p>🚀 TaskMind v1.0 • Built with React + Tailwind • Full-stack edition coming soon</p>
        <p className="mt-1">📅 Day 1 of 120 • Spring Boot backend starts tomorrow</p>
      </footer>
    </div>
  );
}

export default App;
