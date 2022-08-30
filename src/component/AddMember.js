import React, { useState } from 'react'
import Validate from '../utils/Validate';
import { withRouter } from 'react-router-dom';
import { nanoid } from 'nanoid'

const AddMember = (props) => {
  const [addFormData, setAddFormData] = useState({
    name: 'sultan',
    company: 'XYZ',
    status: 'Active',
    lastUpdated: '14-02-2022',
    notes: 'hello',
    errors: {
      name: '',
      company: '',
      status: '',
      lastUpdated: '',
      notes: '',
    }
  })

  let { name, company, status, lastUpdated, notes, errors, } = addFormData

  const handleChange = (event) => {
    let { name, value } = event.target;
    Validate(errors, name, value);
    setAddFormData((data) => {
      return { ...data, [name]: value };
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      company: addFormData.company,
      status: addFormData.status,
      lastUpdated: addFormData.lastUpdated,
      notes: addFormData.notes,
    }

    const newContacts = [...props.contacts, newContact]
    props.setContacts(newContacts)
    props.history.push('/');
    
  }
  return (
    <section className="text-center pt-14 px-64">
      <form onSubmit={handleSubmit} className="border p-8 rounded shadow py-3">

        <h2 className="text-left text-xl">Add Member</h2>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
          placeholder="Name"
          value={name}
        />
        <span className="text-red-500 block">{errors.name}</span>
        <input
          onChange={handleChange}
          type="text"
          name="company"
          className="block w-full border rounded-lg border-gray-300 px-2 py-3 mx-auto mt-4 h-10"
          placeholder="Company"
          value={company}
        />
        <span className="text-red-500 block">{errors.company}</span>
        <input
          onChange={handleChange}
          name="status"
          type="text"
          className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
          placeholder="Status"
          value={status}
        />
        <span className="text-red-500 block">{errors.status}</span>
        <input
          onChange={handleChange}
          name="lastUpdated"
          type="date"
          className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
          placeholder="LastUpdated"
          value={lastUpdated}
        />
        <span className="text-red-500 block">{errors.lastUpdated}</span>

        <input
          onChange={handleChange}
          name="notes"
          type="text"
          className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
          placeholder="Notes"
          value={notes}
        />
        <span className="text-red-500 block">{errors.notes}</span>

        <div className="text-right pt-8">
          <button
            className=" bg-blue-700 px-6 rounded text-white h-10 inline-block submit hover:bg-green-700 submit"
            type="submit"
            disabled={
              errors.name ||
              errors.company ||
              errors.body ||
              errors.status ||
              !name ||
              !company ||
              !status
            }
          >
          Add Member

          </button>
        </div>
      </form>
    </section>
  )
}

export default withRouter(AddMember)