import logo from './logo.svg';
import './App.css';
import { persistor, store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import TodoLayout from './todos/TodoLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<TodoLayout />} /> 
            {/* <Route exact path="/taskmanager" element={<About />} /> 
            <Route exact path="/status" element={<More />} />  */}
          </Routes>
        </BrowserRouter>
        </div>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
