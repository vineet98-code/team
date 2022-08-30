import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = (props) => {
 const {contacts, setContacts } = props

  const handleDelete = (e,id) => {
    const newContacts = [...contacts];
    
    const index = contacts.findIndex((elm) => elm.id !== id);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempUser = contacts.map( contact => contact.name === name ? {...contacts, isChecked: checked } : contacts );
    
  }
return (
    <div className="app-container">
      <div className=" px-40 flex justify-between items-center ">
        <h2 className="text-2xl mt-4">Team Members</h2>
        <button className="bg-green-700 px-6 py-3 rounded text-white inline-block submit">
          <NavLink exact activeClassName="active" to="/add-member">
            Add Member +       
          </NavLink>
        </button>
      </div>
      <div style={{ maxWidth: '860px', border: '2px solid black', margin: '0 auto', height: '60vh', marginTop: '90px'}} >

        <table style={{  width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid grey' }}>
            <input type="checkbox" style={{padding:"10px"}} />
              <th style={{padding: '10px', textAlign: 'left' }}>Name</th>
              <th style={{padding: '10px', textAlign: 'left' }}>Company</th>
              <th style={{padding: '10px', textAlign: 'left' }}>Status</th>
              <th style={{padding: '10px', textAlign: 'left' }}>LastUpdated</th>
              <th style={{padding: '10px', textAlign: 'left' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {props.contacts.map((contact) => (
              <tr key={contact.id}>
                <input type="checkbox" style={{padding: '10px'}}  name={contacts} onChange={handleChange}/>
                <td style={{padding: '10px', textAlign: 'left'}} >{contact.name}</td>
                <td style={{padding: '10px', textAlign: 'left'}} >{contact.company}</td>
                <td style={{padding: '10px', textAlign: 'left'}} >{contact.status}</td>
                <td style={{padding: '10px', textAlign: 'left'}} >{contact.lastUpdated}</td>
                <td style={{padding: '10px', textAlign: 'left'}} >{contact.notes}</td>
                <td className=" px-3 py-1 text-red-400" onClick={()=>handleDelete(contacts.id)}><i className="fas fa-trash-alt"></i></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home

