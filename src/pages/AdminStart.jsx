import { useState, useEffect } from 'react'

function AdminStart( ) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
     
  useEffect(() => { /*TODO*/}, [])

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )
}
export default AdminStart
