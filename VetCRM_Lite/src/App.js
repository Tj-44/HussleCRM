
import React from "react";
import { clinicSettings } from "./settings";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Vet CRM - Clinic Dashboard</h1>
      <h2>Available Doctors:</h2>
      <ul>{clinicSettings.doctors.map(doc => <li key={doc}>{doc}</li>)}</ul>
      <h2>Appointment Reasons:</h2>
      <ul>{clinicSettings.appointmentReasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
      <h2>Status Options:</h2>
      <ul>{clinicSettings.statuses.map(status => <li key={status}>{status}</li>)}</ul>
    </div>
  );
}

export default App;
