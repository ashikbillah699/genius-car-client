import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router/Router';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto mt-10'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
