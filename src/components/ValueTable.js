import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { Button, TextField, Box, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";

import { useValueTable } from "../redux/valueTableSlice";
import { addValue } from "../redux/valueTableSlice";
import { usePosition } from "../redux/positionSlice";
import { editValue } from "../redux/mainTableValuesSlice";
import { formatDate, getRegion, getYear, getCoords } from "../helpers";

import "../index.css";

export function ValueTable() {
  const [numberValue, setNumberValue] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("Anna");
  const dispatch = useDispatch();
  const valueTable = useValueTable();
  const position = usePosition();
  const currentRegion = getRegion(position);
  const currentYear = getYear(position);
  const currentCoord = getCoords(position);

  function handleAddValueClick() {
    dispatch(
      addValue({
        position: position,
        value: numberValue,
        comment: comment,
        user: user,
      })
    );

    dispatch(
      editValue({
        region: currentRegion,
        year: currentYear,
        coords: currentCoord,
        value: valueTable[position].at(-1).value,
      })
    );

    setComment("");
    setNumberValue("");
  }

  const handleClose = () => {
    dispatch(
      editValue({
        region: currentRegion,
        year: currentYear,
        coords: currentCoord,
        value: valueTable[position].at(-1).value,
      })
    );

    window.close();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "20px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead className="border">
            <TableRow>
              <TableCell align="center">VALUE</TableCell>
              <TableCell align="center">DATE</TableCell>
              <TableCell align="center">USER</TableCell>
              <TableCell align="center">COMMENT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valueTable &&
              valueTable?.[position].map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell align="center">{item?.value}</TableCell>
                    <TableCell align="center">{item?.date}</TableCell>
                    <TableCell align="center">{item?.user}</TableCell>
                    <TableCell align="center">{item?.comment}</TableCell>
                  </TableRow>
                );
              })}
            <TableRow>
              <TableCell align="center">
                <TextField
                  value={numberValue}
                  placeholder="value"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  size="small"
                  onChange={(e) => setNumberValue(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">{formatDate(Date.now())}</TableCell>
              <TableCell align="center" sx={{ padding: "0 10px 10px" }}>
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 70 }}
                  size="small"
                >
                  <InputLabel htmlFor="select"></InputLabel>
                  <NativeSelect
                    id="select"
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  >
                    <option value={"Anna"}>Anna</option>
                    <option value={"Alex"}>Alex</option>
                    <option value={"Petro"}>Petro</option>
                  </NativeSelect>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <TextField
                  value={comment}
                  size="small"
                  placeholder="comment"
                  onChange={(e) => setComment(e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: "10px",
          mb: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            paddingInlineStart: "25px",
            paddingInlineEnd: "25px",
            textAlign: "right",
          }}
          onClick={handleAddValueClick}
        >
          Add
        </Button>
        <Link to="/" className="link" state={numberValue}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              marginInlineStart: "15px",
              marginInlineEnd: "15px",
            }}
          >
            Close
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
