import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProfileCourse } from "./OtherComponents/ProfileCourse";
import useViewport from "../viewport";

export const Profile = () => {
  const [active, setActive] = useState(2);
  const { width, height, isMobile, isTablet } = useViewport();

  const jsxDesign = () => {
    return <div style={{ marginTop: 400 }}></div>;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
        },
      }}
    >
      <Paper
        elevation={5}
        style={{ backgroundColor: " rgba(255,255, 255, 0.6) " }}
      >
        <div
          style={{
            display: isTablet ? "inline" : "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: isTablet ? "92%" : "100%",
              marginLeft: "5%",
              marginTop: "5%",
              display: isTablet ? "flex" : "inline",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                backgroundImage: "url(background.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundSize: "contain",
                height: "100%",
              }}
            >
              <div>
                <img
                  style={{
                    width: isTablet ? "70%" : "90%",
                    height: "100%",
                    margin: "2%",
                  }}
                  src="profilepic-modified.png"
                  alt="profile Picture"
                ></img>
              </div>
            </div>

            <div>
              <div style={{ display: isTablet ? "inline" : "none" }}>
                <div>
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "black",
                      borderColor: "black",
                      marginBottom: "5%",
                    }}
                  >
                    {" "}
                    Edit Profile
                  </Button>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "bold" }}
                    gutterBottom
                    component="div"
                  >
                    Remus Lupin
                  </Typography>
                </div>
                <Typography variant="subtitle2" gutterBottom component="div">
                  JEE Aspirant
                </Typography>
              </div>
              <div/>

              <div>
                <img
                  style={{
                    marginTop: "30px",
                    width: "15%",
                    height: "15%",
                    marginLeft: "10%",
                  }}
                  src="Twitter_logo.png"
                  alt="background"
                />
                <img
                  style={{ width: "15%", height: "15%", marginLeft: "15%" }}
                  src="Facebook_logo.png"
                  alt="background"
                />
                <img
                  style={{ width: "15%", height: "15%", marginLeft: "15%" }}
                  src="Instagram_logo.png"
                  alt="background"
                />
              </div>
            </div>
          </div>

          <div style={{ margin: "5%" }}>
            <div style={{ display: isTablet ? "none" : "inline" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold" }}
                  gutterBottom
                  component="div"
                >
                  Remus Lupin
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    color: "black",
                    borderColor: "black",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  Edit Profile
                </Button>
              </div>
              <Typography variant="subtitle2" gutterBottom component="div">
                JEE Aspirant
              </Typography>
            </div>
            <div>
              <ProfileCourse />
              <hr style={{ height: ".9px", backgroundColor: "black" }}></hr>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  );
};
