import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="main_container">
      <div className="lcomponents">
        <Sidebar />
      </div>
      <div className="rcomponents">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
