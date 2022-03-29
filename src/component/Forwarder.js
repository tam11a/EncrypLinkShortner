import React from "react";
import { Button, OutlinedInput, Stack, Typography } from "@mui/material";
import loadSvg from "../loading.svg";
const Forwarder = () => {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  return (
    <Stack width={"90vw"} maxWidth={"580px"} spacing={2} alignItems={"center"}>
      {!data && (
        <img src={loadSvg} alt={"Loading"} style={{ height: "50px" }} />
      )}
      {data && (
        <>
          <Typography noWrap width={"90vw"} maxWidth={"580px"}></Typography>
          <OutlinedInput
            fullWidth
            placeholder="Password of URL/Link"
            required
            error={error}
            name={"password"}
          />
          {error && (
            <Typography variant="caption" width={"100%"} color={"error"}>
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            type={"submit"}
            variant={"contained"}
            sx={{
              py: 1.5,
            }}
            onClick={() => setError("Incorrect Password!!")}
          >
            Open
          </Button>
        </>
      )}
    </Stack>
  );
};

export default Forwarder;
