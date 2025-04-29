import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>User Management System</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/edit/:id" element={<UserForm userId={window.location.pathname.split("/").pop()} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
