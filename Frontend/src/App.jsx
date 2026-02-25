import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [Getdata, setAlldata] = useState([])
  const [title, setTitle] = useState("")// ye dono update note ka hai
  const [description, setDescription] = useState("")// ye dono update note ka hai


             // Fetching data from the backend API
 function datapower(){
     axios.get("https://full-stack-basic.onrender.com/api/notes")
    .then((res) => {
   // console.log(res.data)
    setAlldata(res.data.Note)
    })
 }

 useState(() => {
  datapower()
 }, [])

        // creating a new note and sending it to the backend API
 function handleSubmit(e){
  e.preventDefault();

  setTitle("")// ye dono update note ka hai
  setDescription("")// ye dono update note ka hai
  const {title,description} = e.target.elements;
  //console.log(title.value,description.value)
  
  axios.post("https://full-stack-basic.onrender.com/api/notes",{
    title:title.value,
    description:description.value
  }).then((res) => {
    //console.log(res.data);
    datapower()
  })
 }



      //delete a note by its id and sending the delete request to the backend API
function handleDelete(id){
  axios.delete(`https://full-stack-basic.onrender.com/api/notes/${id}`)
  .then((res) => {
   // console.log(res.data);
    datapower()
  })
}


  //update a note by its id and sending the update request to the backend API
function UpdateNote(id){

  setTitle("")// ye dono update note ka hai
  setDescription("")// ye dono update note ka hai
  axios.patch(`https://full-stack-basic.onrender.com/api/notes/${id}`,{
    title:title,
    description:description
  }).then((res) => {
    //console.log(res.data);
    datapower()
  })
}
  
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input 
        value ={title}// ye dono update note ka hai
        onChange={(e) => setTitle(e.target.value)}// ye dono update note ka hai
        name="title" type="text" placeholder='Enter Title' />
        <input 
        value ={description} // ye dono update note ka hai
        onChange={(e) => setDescription(e.target.value)} // ye dono update note ka hai
        name="description" type="text" placeholder='Description' />
        <button type='submit'>Add Note</button>
      </form>


      <div className="notes">
        {Getdata.map((note) => (
          <div className="note" key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button className="delete-btn" onClick={() => handleDelete(note._id)}>Delete</button>

            <button className="update-btn" onClick={() => UpdateNote(note._id)}>Update</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
