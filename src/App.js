import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataTable } from "./components/DataTable";
import { ValueTable } from "./components/ValueTable";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="value-:position" element={<ValueTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
