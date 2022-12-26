import { Add, Analytics, Business, CalendarMonth, Chat, Home, LightMode, Person, Sell, Task, TrendingUp } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="dashboardContent">
            <h3>Dashboard</h3>
            <ul className="dashboardItems">
                <li>
                    <Analytics/> Analytics
                </li>

                <li>
                    <TrendingUp/> Sales
                </li>

            </ul>
        </div>

        <div className="quickmenuContent">
            <h3>Quick Menu</h3>
            <ul className="quickmenuItems">
              <Link to ="/" className='menuLink'>  <li><Home/> Home</li> </Link>
              <Link to="/users" className='menuLink'>  <li><Person/> Users</li> </Link>
              <Link to ="/newuser" className='menuLink'> <li><Add/> Add user</li> </Link>
            </ul>
        </div>

        <div className="appContentMenu">
            <h3>Apps</h3>
            <ul className="appcontentItem">
                <li><CalendarMonth /> Calendar</li>
                <li><Chat /> Chat</li>
                <li><Task/> Tasks</li>
            </ul>
        </div>

        <div className="switch">
            <ul>
                <li><LightMode/> Dark mode</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar