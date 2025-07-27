// src/context/PatientContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the types for the context data
interface PatientContextType {
  patientId: string;
  setPatientId: React.Dispatch<React.SetStateAction<string>>;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

interface PatientProviderProps {
  children: ReactNode;
}

export const PatientProvider: React.FC<PatientProviderProps> = ({ children }) => {
  // Retrieve the patientId from localStorage, if available
  const [patientId, setPatientId] = useState<string>(
    localStorage.getItem("patientId") || "" // Default to an empty string if not found
  );

  // Update localStorage whenever patientId changes
  useEffect(() => {
    if (patientId) {
      localStorage.setItem("patientId", patientId);
    }
  }, [patientId]);

  return (
    <PatientContext.Provider value={{ patientId, setPatientId }}>
      {children}
    </PatientContext.Provider>
  );
};

// Custom hook to use the PatientContext
export const usePatientContext = (): PatientContextType => {
  const context = React.useContext(PatientContext);
  if (!context) {
    throw new Error("usePatientContext must be used within a PatientProvider");
  }
  return context;
};
