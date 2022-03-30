import React from "react";
import { Button, OutlinedInput, Stack, Typography } from "@mui/material";
import loadSvg from "../loading.svg";

import firebase from "../utilities/firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import { useParams } from "react-router-dom";
import handleSubmit from "./../utilities/handleSubmit";

const dbRef = ref(getDatabase(firebase));

const Forwarder = () => {
  const [data, setData] = React.useState({ url: "" });
  const [error, setError] = React.useState();
  let { search_token } = useParams();
  React.useEffect(() => {
    get(child(dbRef, `app/els/u/${search_token}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search_token]);

  React.useEffect(() => {
    if (!data.url) return;
    if (data.pass) console.log("Have Password");
    else window.location.href = data.url;
  }, [data]);

  React.useEffect(() => {
    setTimeout(() => {
      setError();
    }, 5000);
  }, [error]);

  return (
    <form
      onSubmit={(event) => {
        const formData = handleSubmit(event);
        if (formData.password !== data.pass) setError("Incorrect Password!");
        else window.location.href = data.url;
      }}
    >
      <Stack
        width={"90vw"}
        maxWidth={"580px"}
        spacing={2}
        alignItems={"center"}
      >
        {!data.url && (
          <img src={loadSvg} alt={"Loading"} style={{ height: "50px" }} />
        )}
        {data.pass && (
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
              // onClick={() => setError("Incorrect Password!!")}
            >
              Open
            </Button>
          </>
        )}
      </Stack>
    </form>
  );
};

export default Forwarder;
