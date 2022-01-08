import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Mycousrebox } from './OtherComponents/MyCourse';

export const Mycourse = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            padding:"1%",
            width: "100%",
            // height: 650,
          },
        }}
      >
        <Paper elevation={5} style={{backgroundColor:" rgba(255,255, 255, 0.6) "}}>
          <div style={{padding:"2%"}}>
            <div style={{display:"flex"}}>
              <div style={{flexDirection:"column", display:"flex"}}>
                <img style={{height:"40%", width:"100%"}} src="mycourse1.png" alt="background"/>      
                <img style={{height:"40%", width:"100%"}} src="mycourse2.png" alt="background"/>      
              </div>
              <Typography variant="h4"  style={{fontWeight:"bold",marginLeft:"2%"}}  gutterBottom component="div">
                My Courses
              </Typography>
            </div>
            <Mycousrebox/>
          </div>
        </Paper>
      </Box>
    )
}
