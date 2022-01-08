import React, { useState } from "react";
import { Left } from './Left';
import { Right } from './Right';
import { Pattern } from './OtherComponents/Pattern';
import useViewport from "../viewport";


export const Mainpage = () => {

    const [active, setActive] = useState(2);
    const { width, height, isMobile, isTablet } = useViewport();
  
    const jsxDesign = () => {
      return <div style={{ marginTop: 400 }}></div>;
    };

    return (
        <>
            <div style={{
                backgroundImage: "url(bg.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',display:"flex", justifyContent:"center", }}
            
            >
                <div style={{marginTop:"auto", marginLeft:"20px", display:isTablet?"none":"inline"}}>

                    <div style={{ width:"70px", height:"50px",marginBottom:"1080px",}}>
                    <img style={{ width:"inherit", height:"inherit"}}
                    src="bgpic.png" alt="background"/>
                    </div>

                    <div style={{width:"65px",height:"150px"}}>
                    <img style={{ width:"inherit", height:"inherit"}}
                    src="pattern.png" alt="background"/>
                    </div>
                </div>
                
                <div style={{margin:"2%",display: isTablet? "inline" : "flex"}}>
                    <div style={{width:isTablet?"100%":"60%"}}>
                        <Left/> 
                    </div>
                    <div style={{width: isTablet?"100%":"40%"}}>
                        <div>
                            <Right/>
                            <div style={{ width:"40px", height:"40px", marginLeft:"1%"}}>
                            <img style={{ width:"inherit", height:"inherit"}}
                            src="D.png" alt="background"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:isTablet?"none":"inline"}}>
                    <Pattern/>
                </div>
            </div>

           
          <div>
            <img style={{hight:
            "100%", width:"100%", backgroundPosition: "left",}} src="footer.png" alt="background"/>
            </div>

        </>
    )
}
