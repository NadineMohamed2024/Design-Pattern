import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';
import { observable, toast } from './task2';

function App() {
  return (
    <div className="flex flex-col items-center space-y-10 bg-gray-100 min-h-screen py-20">
      <h1 className="text-7xl font-bold text-center text-gray-800">Home Page</h1>

      <div className="space-x-2">
        <Button onClick={() => {toast("hello")}} className="bg-blue-500 hover:bg-blue-600 text-white">Default</Button>
        <Button onClick={() => {toast.success("success")}} className="bg-green-500 hover:bg-green-600 text-white">Success </Button>
        <Button onClick={() => {toast.error("Error")}} className="bg-red-500 hover:bg-red-600 text-white">Error </Button>
        <Button onClick={() => {toast.dismissAll()}} className="bg-gray-500 hover:bg-gray-600 text-white">Remove All</Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
