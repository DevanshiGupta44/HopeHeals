import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Skeleton,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#E6535A",
  },
}));

export default function Result({ isLoading, data, isError, image }) {
  const perc = convertToPercentage(data?.result?.score);

  function convertToPercentage(num) {
    const percentage = num * 100;
    return percentage;
  }

  return(
        <Typography textAlign="center" m="20px" color="red" fontWeight="bold">
          System is not running...
        </Typography>
      );
}
