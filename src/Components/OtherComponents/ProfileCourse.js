import { display } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
export const ProfileCourse = () => {
    const topics = ['Jee', 'Calculus', 'Mechanics', 'Organic', 'B.Tech', 'Thermodynamics', 'Calculus', 'Mechanics', 'CSE','Organic', 'Jee', 'B.Tech', 'Thermodynamics', 'B.Tech', 'Calculus', 'Organic'];
    return (
        <div style={{diplay:"flex"}}>
            {topics.map((topic) => (
            <Typography variant="caption" display="block" gutterBottom style={{border: "0.3px solid #4C4E73", 
                display: "inline-table",
                padding: "5px",
                textAlign:"center",
                borderRadius:"15px", margin:"1%",
                }}>
                {topic}
                
            </Typography>))}
        </div>
    )
}
