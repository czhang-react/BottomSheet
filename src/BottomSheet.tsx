import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Typography,
  Modal,
  Backdrop,
  Slide,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  paper: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px 10px 0 0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "92vh",
    maxHeight: "92vh",
    overflowY: "auto",
    position: "relative",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
  },
  actionButton: {
    marginLeft: "auto",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const BottomSheet = ({ open, handleClose, content }) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box className={classes.paper}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            {/* <CloseIcon /> */}
          </IconButton>
          <Box className={classes.header}>
            <Avatar className={classes.avatar} src="/path-to-avatar.jpg" />
            <Box ml={2}>
              <Typography variant="h6">Tara Arya</Typography>
              <Typography variant="body2" color="textSecondary">
                Available for work
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.actionButton}
            >
              Get in touch
            </Button>
          </Box>
          <Box className={classes.content}>
            <Typography variant="h5" gutterBottom>
              [FREEBIE] Xiketic Charts Library v2
            </Typography>
            <Typography variant="body1" paragraph>
              Dot Strip Plot
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Dot strip plots represent rankings as dots plotted on the axes.
              This is a space-efficient ranking across different categories of
              variables.
            </Typography>
            <Box
              component="img"
              src="/path-to-image.jpg"
              alt="Dot Strip Plot"
              width="100%"
            />
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

export default BottomSheet;
