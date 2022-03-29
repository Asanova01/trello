import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

export const DialogPrompt= (props) => {

  return (
    <Dialog open={props.showDialog}>
      <DialogTitle>Выход со страницы</DialogTitle>
      <DialogContent>
        <Typography>Есть некоторые изменения</Typography>
        <Typography>Если вы продолжите, ваши данные будут потеряны.</Typography>
        <Typography>Вы уверены, что хотите продолжить? ?</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.cancelNavigation}>
          Нет
        </Button>
        <Button variant="contained" onClick={props.confirmNavigation}>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};
