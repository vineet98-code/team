import React, { useState } from 'react'
import data from '../utils/data.json'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'


const Home = () => {
  const [contacts, setContacts] = useState(data)

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
      <div style={{ maxWidth: '800px', border: '2px solid black', margin: '0 auto', height: '50vh', marginTop: '90px'}} >

        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid grey', padding: '20px' }}>
              <th style={{padding: '10px', textAlign: 'left'}}>Name</th>
              <th style={{padding: '10px', textAlign: 'left'}}>Company</th>
              <th style={{padding: '10px', textAlign: 'left'}}>Status</th>
              <th style={{padding: '10px', textAlign: 'left'}}>LastUpdated</th>
              <th style={{padding: '10px', textAlign: 'left'}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td style={{padding: '10px', textAlign: 'left'}}>{contact.Name}</td>
                <td style={{padding: '10px', textAlign: 'left'}}>{contact.Company}</td>
                <td style={{padding: '10px', textAlign: 'left'}}>{contact.Status}</td>
                <td style={{padding: '10px', textAlign: 'left'}}>{contact.LastUpdated}</td>
                <td style={{padding: '10px', textAlign: 'left'}}>{contact.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home

const StyledTable = styled.table`

`