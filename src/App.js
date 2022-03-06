import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
//import EmployeesList from "./components/employeesList";
const EmployeesList = React.lazy(() => import("./components/EmployeesList"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route
          path="/employee-list"
          element={
            <Suspense fallback={<div>Chargement...</div>}>
              <EmployeesList />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
