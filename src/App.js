import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { EmployeeList, EmployeeForm } from "./components";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Home from "./components/Home";
import { Review } from "./components/Review";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/review" element={<Review />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
