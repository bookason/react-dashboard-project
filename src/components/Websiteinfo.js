import { ArrowDownward, ArrowUpward, TrendingDown, TrendingUp } from '@mui/icons-material'
import React from 'react'
import PieChart from './subcompontents/PieChart'

const Websiteinfo = () => {
  return (
    <div className='websiteInfo'>
        <div className="webTraffic">
            <div className="headerTitle">
                <h3>Traffic overview</h3>
                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                </select>
            </div>
            <div className="webContent">
                <PieChart width ="400"/>
            </div>
        </div>
        <div className="webPerformance">
            <div className="performanceContent">
                <div className="leftContent">
                    <span>Click-through rate </span>
                    <span>14.34% <span className="badge negative"><ArrowDownward/> -3.4%</span></span>
                </div>
                <div className="rightContent">
                <TrendingDown style ={{color: "rgb(250, 75, 9)", fontSize: "3rem"}}/>
                </div>
            </div>

            <div className="performanceContent">
            <div className="leftContent">
                    <span>Bounce rate</span>
                    <span>22.67% <span className="badge positive"><ArrowUpward/> +2.2%</span></span>
            </div>

            <div className="rightContent">
                <TrendingUp style ={{color: "rgb(67, 244, 67)", fontSize: "3rem"}}/>
            </div>
            </div>
            <div className="performanceContent">
                <div className="leftContent">
                    <span>Opt-in rate</span>
                    <span >32.33% <span className="badge positive"><ArrowUpward/> +4.5%</span></span>
                </div>

                <div className="rightContent">
                <TrendingUp style ={{color: "rgb(67, 244, 67)", fontSize: "3rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Websiteinfo