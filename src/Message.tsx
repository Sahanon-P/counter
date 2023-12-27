import {
    Modal,
    Backdrop,
    Typography,
    Button,
    Stack,
  } from "@mui/material";
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    bgcolor: "black",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  };
  export default function Message({
    message,
    scoreMessage,
    open,
    handleClose,
  }: {
    message: string;
    scoreMessage: string;
    open: boolean;
    handleClose: () => void;
  }) {
    let isBlueWin = false;
    if (message.includes("blue")) {
      isBlueWin = true;
    } else if (message.includes("red")) {
      isBlueWin = false;
    }
    return (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Stack spacing={5} sx={style}>
          <Typography color={isBlueWin ? "primary" : "error" } variant="h1">
            {message.toUpperCase()}
          </Typography>
          <Typography color={isBlueWin ? "primary" : "error" } variant="h2">
            {scoreMessage}
          </Typography>
          <Button color={isBlueWin ? "primary" : "error" } onClick={handleClose}>
            {" "}
            close
          </Button>
        </Stack>
      </Modal>
    );
  }
  