import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="container-fluid">
        <div className="col-12 p-0 main-content ml-auto" style={{ width: "94%" }} >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
