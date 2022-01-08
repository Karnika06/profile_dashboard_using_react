import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Doubt = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          padding: "1%",
        },
      }}
    >
      <div
        style={{
          background: "linear-gradient(110deg, #38f2fc  , #7aff7f)",
          borderRadius: "15px",
          margin: "1%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "7%",
          }}
        >
          <img
            style={{ width: "28%", margin: "1%" }}
            src="doubtDP.png"
            alt="background"
          />
          <div>
            <Typography
              variant="h5"
              style={{ color: "white" }}
              gutterBottom
              component="div"
            >
              Any Any Doubts?
            </Typography>
            <Typography
              variant="body1"
              style={{ justifyContent: "left", color: "white" }}
              gutterBottom
            >
              <ul>
                <li>Talk to our mentors</li>
                <li>Get expert Guidance</li>
                <li>Talk to our mentors</li>
              </ul>
            </Typography>
          </div>
        </div>
        <div style={{ width: "96%", margin: "4%" }}>
          <Button
            variant="outlined"
            style={{
              width: "inherit",
              color: "white",
              borderColor: "white",
              fontWeight: "bold",
            }}
          >
            Book Your Free Mentorship Session Now!
          </Button>
        </div>
      </div>
    </Box>
  );
};
