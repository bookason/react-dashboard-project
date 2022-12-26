import { ArrowDownward, ArrowUpward, MoreVert, PieChart, ShowChart, TrendingUp } from "@mui/icons-material";
import React, { useState } from "react";

const Topcontent = () => {

    const [style, setStyle] = useState(false);

    const ids = [1,2,3]
    

    const [activeId, setActiveid] = useState(ids)


    const changeClass =(id)=>{
            

            setStyle(!style);

            const el = document.getElementById(id)

            if(style!==true){
                el.classList.add("active")
            } else{
                el.classList.remove("active")
            }

        
        console.log("el:", el)
    }
  return (
    <div className="topContent">
      <div className="topcontentBox">
        <div className="header">
          <h3>Q4 Revenue</h3>
          <span className="subItem">
          <MoreVert className ="threeDot" onClick = {()=>changeClass("1")} />

          <div className="subitemContent" id="1">
            <ul className="subitemList">
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
            </ul>
          </div>

        {/* <div className={style === false ? "subitemContent" : "subitemContent active"} id="1">
            <ul className="subitemList">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
          </div> */}
          </span>
        </div>
        <div className="bottomContent">
          <div className="chartBox">
            <PieChart />
          </div>

          <div className="bottomText">
            <span>$</span>
            <span className="bottomSpan" >11,600</span>
          </div>
        </div>
      </div>

      <div className="topcontentBox">
        <div className="header">
          <h3>Total Returns</h3>
          <span className="subItem">
          <MoreVert className ="threeDot" onClick = {()=>changeClass("2")}/>
          <div className="subitemContent" id ="2">
            <ul className="subitemList">
                <li>Jan: 122</li>
                <li>Feb: 214</li>
                <li>Mar: 034</li>
            </ul>
          </div>
          </span>
        </div>

        <div className="bottomContent">
          <div className="chartBox">
            <TrendingUp style={{color: "#43f443"}}/>
          </div>

          <div className="bottomText">
            <span><ArrowUpward style={{color: "#43f443"}}/></span>
            <span className="bottomSpan">2,500</span>
          </div>
        </div>
      </div>

      <div className="topcontentBox">
        <div className="header">
          <h3>Conversion rate</h3>
          <span className="subItem">
          <MoreVert className ="threeDot" onClick = {()=>changeClass("3")}/>
          <div className="subitemContent" id ="3">
            <ul className="subitemList">
                <li>Jan: 2.4%</li>
                <li>Feb: 3.5%</li>
                <li>Mar: 3.4%</li>
            </ul>
          </div>
          </span>
        </div>
        <div className="bottomContent">
          <div className="chartBox">
            <ShowChart style={{color: "#fb3636"}}/>
          </div>

          <div className="bottomText">
            <span><ArrowDownward style ={{color: "#e64b09"}}/></span>
            <span className="bottomSpan">16</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topcontent;
