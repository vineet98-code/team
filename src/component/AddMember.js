import React, { useState } from 'react'
import Validate from '../utils/Validate';

const AddMember = (props) => {
    const [addFormData, setAddFormData] = useState({
        name: '',
        company: '',
        status: '',
        lastUpdated: '',
        notes: '',
        errors: {
            name: '',
            company: '',
            status: '',
            lastUpdated: '',
            notes: '', 
        }
    })

    let { name, company, status, lastUpdated, notes, errors,  } = addFormData

    const handleChange = (event) => {
        let { name, value } = event.target;
        Validate(errors, name, value);
        setAddFormData((data) => {
            return { ...data, [name]: value };
        });
    };
    
return (
        <section className="text-center pt-14 px-64">
        <form className="border p-8 rounded shadow py-3">

          <h2 className="text-left text-xl">Write your Article...</h2>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 text-lg"
            placeholder="Article name"
            value={name}
          />
          <span className="text-red-500 block">{errors.name}</span>
          <input
            onChange={handleChange}
            type="text"
            name="company"
            className="block w-full border rounded-lg border-gray-300 px-2 py-3 mx-auto mt-4 h-10"
            placeholder="company"
            value={company}
          />
          <span className="text-red-500 block">{errors.company}</span>
          <input
            onChange={handleChange}
            name="status"
            type="text"
            className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
            placeholder="Enter status"
            value={status}
          />
          <span className="text-red-500 block">{errors.status}</span>
          <input
            onChange={handleChange}
            name="lastUpdated"
            type="data"
            className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
            placeholder="Enter lastUpdated"
            value={lastUpdated}
          />
          <span className="text-red-500 block">{errors.lastUpdated}</span>
          <input
            onChange={handleChange}
            name="notes"
            type="text"
            className="block w-full border rounded-lg border-gray-300 px-2  py-3 mx-auto mt-4 h-10"
            placeholder="Enter notes"
            value={notes}
          />
          <span className="text-red-500 block">{errors.notes}</span>

          <div className="text-right pt-8">
            <button
              className=" bg-blue-700 px-6 rounded text-white h-10 inline-block submit hover:bg-green-700 submit"
              type="submit"
            //   disabled={
            //     errors.name ||
            //     errors.company ||
            //     errors.body ||
            //     errors.status ||
            //     !name ||
            //     !company ||
            //     !body ||
            //     !status
            //   }
            >
              Add Member
            </button>
          </div>
        </form>
      </section>
    )
}

export default AddMember