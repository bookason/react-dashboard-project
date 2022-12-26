import React from 'react'
import Userlistcomponent from '../components/Userlistcomponent'

const Userlist = ({data}) => {

  console.log("data from userlist page: ", data)
  return (
    <div className='userlist'>

      {data.map((item, idx) =>(
        <Userlistcomponent item ={item}/>
      ))}

    </div>
  )
}

export default Userlist