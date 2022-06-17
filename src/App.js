import React from "react";
import { CssBaseline } from "@mui/material";
import { DataTable } from "./components/DataTable";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import "./index.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className="border">
          <DataTable />
        </Box>
      </Container>
    </>
  );
}

export default App;
