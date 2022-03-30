import React from "react";
import {
  Button,
  // Paper,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
  // SwipeableDrawer,
  // List,
  // ListItemButton,
  // ListItemText,
  Box,
} from "@mui/material";
import { MdAddLink, MdClose, MdOutlineAttachEmail } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
// import { VscHistory } from "react-icons/vsc";
import { v4 } from "uuid";
import handleSubmit from "../utilities/handleSubmit";
import firebase from "../utilities/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  EmailShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

var db = getDatabase(firebase);

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen(!open);
  };

  // const [drawer, setDrawer] = React.useState(false);
  // const handleDrawer = () => {
  //   setDrawer(!drawer);
  // };

  return (
    <Stack direction={"column"} alignItems={"center"} spacing={1}>
      <Typography variant="h3">ELS</Typography>
      <Typography variant="caption" color={"primary"}>
        Encrypted Link Shortner
      </Typography>
      <Box mt={5} />
      <Tooltip title={"Generate"}>
        <Button
          color={"secondary"}
          variant={"contained"}
          onClick={handleChange}
          startIcon={
            <MdAddLink
              style={{
                transform: "rotate(-45deg)",
              }}
            />
          }
        >
          Generate New
        </Button>
      </Tooltip>
      {/* <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Tooltip title={"Generate"}>
          <IconButton color={"secondary"} onClick={handleChange}>
            <MdAddLink
              style={{
                transform: "rotate(-45deg)",
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title={"History"}>
          <IconButton color={"secondary"} onClick={handleDrawer}>
            <VscHistory />
          </IconButton>
        </Tooltip>
      </Stack> */}
      <GenerateELS open={open} handleChange={handleChange} />
      {/* <History open={drawer} handleChange={handleDrawer} /> */}
    </Stack>
  );
};

const GenerateELS = ({ open, handleChange }) => {
  const [secure, setSecure] = React.useState(false);
  const [submitted, setSubmitted] = React.useState();
  const handleCreateForm = (event) => {
    const data = handleSubmit(event);
    const newV4 = v4();
    // console.log(data);
    // const dataRef = firebase.database().ref(`app/els/u/${newV4}`).push(data);

    set(ref(db, "app/els/u/" + newV4), data)
      .then(() => {
        // Data saved successfully!
        console.log("Saved!!");
        setSubmitted({
          ...data,
          token: newV4,
        });
      })
      .catch((error) => {
        // The write failed...
      });
  };
  return (
    <Dialog
      open={open}
      // onClose={handleChange}
      PaperProps={{
        sx: {
          width: "100vw",
          m: { xs: "10px", sm: "unset" },
        },
      }}
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
            sx={{
              color: "primary.main",
            }}
          >
            <MdAddLink
              style={{
                transform: "rotate(-45deg)",
              }}
              fontSize={"1.5rem"}
            />{" "}
            <Typography>Generate ELS</Typography>
          </Stack>
          <IconButton
            color={"secondary"}
            onClick={() => {
              handleChange();
              setTimeout(() => {
                setSubmitted();
              }, 2000);
            }}
          >
            <MdClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider />
      {!submitted && (
        <form onSubmit={handleCreateForm}>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 1,
            }}
          >
            <OutlinedInput
              fullWidth
              placeholder="Paste Link/URL*"
              name={"url"}
              required
            />
            {secure && (
              <OutlinedInput
                fullWidth
                placeholder="Create Password*"
                required
                name={"pass"}
              />
            )}
            <Stack direction={"row"} alignItems={"center"}>
              <Checkbox
                checked={secure}
                size={"small"}
                onChange={() => setSecure(!secure)}
              />
              <Typography variant={"overline"} sx={{ mt: 0.3 }}>
                Secure ELS with Password
              </Typography>
            </Stack>
            <Button
              type={"submit"}
              variant={"contained"}
              sx={{
                py: 1.5,
              }}
            >
              Generate
            </Button>
          </DialogContent>
        </form>
      )}
      {submitted && (
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            rowGap: 1,
          }}
        >
          <Typography>The ELS is Generated in the given URL.</Typography>
          <CopyToClipboard
            text={window.location.origin + "/u/" + submitted.token}
          >
            <Box
              backgroundColor={"#ffffff11"}
              sx={{
                p: 1,
                borderRadius: 1,
                my: 1,
              }}
            >
              <Typography noWrap width={"100%"} maxWidth={"580px"}>
                {window.location.origin + "/u/" + submitted.token}
              </Typography>
            </Box>
          </CopyToClipboard>
          <Stack
            direction={"row"}
            alignItems={"center"}
            width={"100%"}
            maxWidth={"220px"}
            justifyContent={"space-evenly"}
          >
            <CopyToClipboard
              text={window.location.origin + "/u/" + submitted.token}
            >
              <IconButton color="primary">
                <FiCopy />
              </IconButton>
            </CopyToClipboard>

            <IconButton
              color="primary"
              component={WhatsappShareButton}
              url={window.location.origin + "/u/" + submitted.token}
              // style={{}}
              sx={{
                fontSize: "1.5rem !important",
                padding: "0.5rem !important",
                color: "#7dd7f5 !important",
                "&:hover": {
                  background: "#7dd7f508 !important",
                },
              }}
            >
              <FaWhatsapp />
            </IconButton>

            <IconButton
              color="primary"
              component={TelegramShareButton}
              url={window.location.origin + "/u/" + submitted.token}
              sx={{
                fontSize: "1.5rem !important",
                padding: "0.5rem !important",
                color: "#7dd7f5 !important",
                "&:hover": {
                  background: "#7dd7f508 !important",
                },
              }}
            >
              <FaTelegramPlane />
            </IconButton>

            <IconButton
              color="primary"
              component={EmailShareButton}
              url={window.location.origin + "/u/" + submitted.token}
              sx={{
                fontSize: "1.5rem !important",
                padding: "0.5rem !important",
                color: "#7dd7f5 !important",
                "&:hover": {
                  background: "#7dd7f508 !important",
                },
              }}
            >
              <MdOutlineAttachEmail />
            </IconButton>
          </Stack>
        </DialogContent>
      )}
    </Dialog>
  );
};
/*
const History = ({ open, handleChange }) => {
  return (
    <SwipeableDrawer
      open={open}
      anchor={"bottom"}
      onOpen={handleChange}
      onClose={handleChange}
      PaperProps={{
        sx: {
          maxWidth: "600px",
          mx: "auto",
        },
      }}
    >
      <Paper>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={2}
          py={1}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
            sx={{
              color: "primary.main",
            }}
          >
            <VscHistory fontSize={"1.5rem"} />{" "}
            <Typography>Your History</Typography>
          </Stack>
          <IconButton color={"secondary"} onClick={handleChange}>
            <MdClose />
          </IconButton>
        </Stack>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemText
              primary={"ASDbcaZ"}
              secondary={"https://facebook.com"}
            />
          </ListItemButton>
        </List>
      </Paper>
    </SwipeableDrawer>
  );
};
*/
export default Home;
