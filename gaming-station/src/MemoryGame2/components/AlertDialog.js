import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const AlertDialog = ({
  message,
  setReset,
  setIsModalOpen,
  increaseStage,
  isLost,
}) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsModalOpen(false);
  };

  const handleRestartButton = () => {
    setReset((current) => !current);
    setIsModalOpen(false);
    handleClose();
  };

  const handleContinueButton = () => {
    setReset((current) => !current);
    increaseStage();
    setIsModalOpen(false);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestartButton}>Restart</Button>
          {!isLost && (
            <Button onClick={handleContinueButton} autoFocus>
              Continue
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
