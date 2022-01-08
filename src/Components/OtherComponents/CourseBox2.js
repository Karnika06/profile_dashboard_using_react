import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useViewport from "../../viewport";
import { styled } from '@mui/system';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';


const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const CustomButtonRoot = styled('button')`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }


export const CourseBox2 = () => {
    const [active, setActive] = useState(2);
    const { width, height, isMobile, isTablet } = useViewport();
  
    const jsxDesign = () => {
      return <div style={{ marginTop: 400 }}></div>;
    };
    return (
        <Box
        sx={{
            display: 'flex',
            '& > :not(style)': {
            m: 1,
            width: "100%",
            height: "8%",
            },
        }}
        >
        <Paper variant="outlined">
        <div style={{display:"flex", padding:"1%"}}>
            <div>
                <img style={{width:"100%", height:"100%", borderRadius:"10%"}} 
                src="webpic.png" alt="cousre pic"/>
            </div>
            <div style={{marginLeft:"2%", }}>
                <div style={{display:"flex", justifyContent:"space-between" }}>
                    <Typography variant="h6" gutterBottom component="div" 
                    style={{fontWeight:"600"}}>
                    Lorem ipsum sit amet   
                    </Typography>
            
                    <div 
                    style={{ 
                        backgroundImage: "url(time.png)",
                        backgroundrepeat: "no-repeat",
                        width: "175px",
                        height: "45px",
                        backgroundSize: 'cover',
                        display: isTablet?"none":"flex"
                    }}>
                    
                        <div style={{display:"flex", padding:"2%",  }}>
                        <img style={{width:"18%",marginLeft:"2%",height: "max-content"}} src="clock.png" alt="coursera cousre pic"/>
                        <Typography variant="button" display="block" gutterBottom style={{color:"white", fontWeight:"700", fontSize:"100%", marginLeft:"5%" }}>
                        8:00-9:00 PM
                        </Typography>
                        </div>
                    </div>
                </div>
                <div style={{ alignItems: isTablet?"normal":"self-end", display:"flex", flexDirection:"column"}}>
                    <div>
                    <Typography variant="caption" display="block" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                    </Typography>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div 
                        style={{ 
                            backgroundImage: "url(time.png)",
                            backgroundRepeat: "no-repeat",
                            width: isMobile? "135px":"175px",
                            height:isMobile? "35px":"45px",
                            backgroundSize: 'cover',
                            display: isTablet?"flex":"none"
                        }}>
                        
                            <div style={{padding:"2%", display:"flex" }}>
                            <img style={{width:"18%",marginLeft:"2%",height: "max-content"}} src="clock.png" alt="coursera cousre pic"/>
                            <Typography variant="button" display="block" gutterBottom style={{color:"white", fontWeight:"700",  marginLeft:"5%" }}>
                            8:00-9:00 PM
                            </Typography>
                            </div>
                        </div>
                        <div>
                        <CustomButton disabled style={{padding: isMobile?"8px":"12px 24px"}} >Join Now</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Paper>
    </Box>
    )
}
