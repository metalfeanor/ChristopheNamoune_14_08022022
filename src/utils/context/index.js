import React, { useState, createContext } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const saveEmployees = (newEmployees) => {
    setEmployees([...employees, newEmployees]);
  };

  return <EmployeeContext.Provider value={{ employees, saveEmployees }}>{children}</EmployeeContext.Provider>;
};
