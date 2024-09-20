import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setAge,
  setFirstName,
  setLastName,
} from "../../../../cache/slices/symptomChecker";

function Details() {
  const { firstName, lastName, age } = useSelector(
    (state) => state.symptomChecker
  );
  const dispatch = useDispatch();

  function handleChange(seter, value) {
    dispatch(seter(value));
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box width="40%" display="flex" gap="30px" flexDirection="column">
        <TextField
          label="First Name"
          value={firstName}
          fullWidth
          onChange={(e) => {
            handleChange(setFirstName, e.target.value);
          }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          fullWidth
          onChange={(e) => {
            handleChange(setLastName, e.target.value);
          }}
        />
        <TextField
          label="Age"
          value={age}
          fullWidth
          type="number"
          onChange={(e) => {
            const value = e.target.value;
            if (value >= 0 && value <= 120) {
              handleChange(setAge, value);
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default Details;
