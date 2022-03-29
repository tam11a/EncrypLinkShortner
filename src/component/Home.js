import React from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { MdAddLink, MdClose } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Stack direction={"column"} alignItems={"center"} spacing={1}>
      <Typography variant="h3">ELS</Typography>
      <Typography variant="caption" color={"primary"}>
        Encrypted Link Shortner
      </Typography>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
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
          <IconButton color={"secondary"}>
            <VscHistory />
          </IconButton>
        </Tooltip>
      </Stack>
      <GenerateELS open={open} handleChange={handleChange} />
    </Stack>
  );
};

const GenerateELS = ({ open, handleChange }) => {
  const [secure, setSecure] = React.useState(false);
  return (
    <Dialog
      open={open}
      onClose={handleChange}
      PaperProps={{
        sx: {
          width: "100vw",
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
            />{" "}
            <Typography>Generate ELS</Typography>
          </Stack>
          <IconButton color={"secondary"} onClick={handleChange}>
            <MdClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
        }}
      >
        <OutlinedInput
          fullWidth
          placeholder="Paste Link/URL*"
          name={"link"}
          required
        />
        {secure && (
          <OutlinedInput
            fullWidth
            placeholder="Create Password*"
            required
            name={"password"}
          />
        )}
        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox checked={secure} onChange={() => setSecure(!secure)} />
          <Typography variant={"overline"}>Secure the ELS</Typography>
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
    </Dialog>
  );
};
export default Home;
