import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useMainTableValues } from "../redux/mainTableValuesSlice";
import { setPosition } from "../redux/positionSlice";

import "../index.css";

const headColumnLabels = ["xx", "yy", "zz"];
const years = ["2017", "2018", "2019"];

export function DataTable() {
  const dispatch = useDispatch();
  const mainTableValues = useMainTableValues();

  let index = 0;

  const handleClickOpen = (i) => {
    dispatch(setPosition(i));
    window.open(`/value-${i}`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box className="border">
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 650,
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2}>Regions</TableCell>

                  <TableCell colSpan={3} align="center">
                    2017
                  </TableCell>
                  <TableCell colSpan={3} align="center">
                    2018
                  </TableCell>
                  <TableCell colSpan={3} align="center">
                    2019
                  </TableCell>
                </TableRow>
                <TableRow>
                  {Array.from({ length: 3 }).map((item) => {
                    return headColumnLabels.map((column, i) => {
                      return (
                        <TableCell key={i} align="center">
                          {column}
                        </TableCell>
                      );
                    });
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(mainTableValues).map(([city, values]) => {
                  return (
                    <React.Fragment key={city}>
                      <TableRow>
                        <TableCell>{city}</TableCell>
                        {years.map((year, i) => {
                          const coord = values.G[year];
                          let count = index;
                          index += 3;
                          return (
                            <React.Fragment key={i}>
                              <TableCell
                                className="cell-hover"
                                key={`xx${i}`}
                                onClick={() => handleClickOpen(count)}
                                sx={{ cursor: "pointer" }}
                                align="center"
                              >
                                {coord?.XX?.value}
                              </TableCell>
                              <TableCell
                                className="cell-hover"
                                key={`yy${i}`}
                                onClick={() => handleClickOpen(count + 1)}
                                sx={{ cursor: "pointer" }}
                                align="center"
                              >
                                {coord?.YY?.value}
                              </TableCell>
                              <TableCell
                                className="cell-hover"
                                key={`zz${i}`}
                                onClick={() => handleClickOpen(count + 2)}
                                sx={{ cursor: "pointer" }}
                                align="center"
                              >
                                {coord?.ZZ?.value}
                              </TableCell>
                            </React.Fragment>
                          );
                        })}
                      </TableRow>
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}
