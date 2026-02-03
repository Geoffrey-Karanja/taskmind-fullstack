export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold">📝</span>
          </div>
          <h1 className="text-2xl font-bold">TaskMind</h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Login
          </button>
          <button className="bg-transparent border-2 border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
