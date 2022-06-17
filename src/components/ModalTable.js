import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ValueTable } from "./ValueTable";

export function ModalTable(props) {
  const { closeModal, open, position } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={closeModal}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <ValueTable position={position} />
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          variant="outlined"
          onClick={closeModal}
          sx={{ marginInlineEnd: "15px", marginBlockStart: "-15px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
