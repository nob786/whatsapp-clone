import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <h1>Whatsapp</h1>

      <div className=" app_body">
        {/* SideBar */}
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
