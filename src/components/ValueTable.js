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
import { useDispatch } from "react-redux/es/exports";
import { useValueTable } from "../redux/valueTableSlice";
import { addValue } from "../redux/valueTableSlice";
import { formatDate } from "../helpers";

export function ValueTable({ position }) {
  const [numberValue, setNumberValue] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("Anna");
  const dispatch = useDispatch();
  const valueTable = useValueTable();

  function handleAddValueClick() {
    dispatch(
      addValue({
        position: position,
        value: numberValue,
        comment: comment,
        user: user,
      })
    );
    setComment("");
    setNumberValue("");
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>VALUE</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>USER</TableCell>
              <TableCell>COMMENT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valueTable[position].map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{item?.value}</TableCell>
                  <TableCell>{item?.date}</TableCell>
                  <TableCell>{item?.user}</TableCell>
                  <TableCell>{item?.comment}</TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell>
                <TextField
                  value={numberValue}
                  placeholder="value"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  size="small"
                  onChange={(e) => setNumberValue(e.target.value)}
                />
              </TableCell>
              <TableCell>{formatDate(Date.now())}</TableCell>
              <TableCell sx={{ padding: "0 10px 10px" }}>
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
                      console.log(e.target.value);
                      setUser(e.target.value);
                    }}
                  >
                    <option value={"Anna"}>Anna</option>
                    <option value={"Alex"}>Alex</option>
                    <option value={"Petro"}>Petro</option>
                  </NativeSelect>
                </FormControl>
              </TableCell>
              <TableCell>
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
      </Box>
    </>
  );
}
