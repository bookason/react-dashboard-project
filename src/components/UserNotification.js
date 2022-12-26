import { Visibility } from '@mui/icons-material'
import React from 'react'
import TableComponent from './subcompontents/TableComponent'

const UserNotification = () => {
  return (
    <div className='userNotification'>
      <div className="users">
       <h3>Active users</h3>
       <div className="usersContent">
        <div className="userInfo">
          <img className='userinfoImg' src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
          <div className="userDetail">
            <h4>Mike Smith</h4>
            <h5>Backend developer</h5>
          </div>
        </div>

        <div className="userView">
          <Visibility/>
        </div>
       </div>
      </div>
      <div className="notifications">
          <h3>Latest transactions</h3>
      <div className="notificationTable">
        <TableComponent/>
      </div>

      </div>
    </div>
  )
}

export default UserNotification