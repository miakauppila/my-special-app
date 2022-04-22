import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { useState } from 'react';

const PatientList = () => {

  const [searchText, setSearchText] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCaseInput = e.target.value.toLowerCase();
    setSearchText(lowerCaseInput);
  };

  const patients = [
    {
      id: 1,
      name: 'Hong',
      owner: 'John Smith',
      species: 'Dog',
      breed: 'Pit Bull',
      age: '2',
      lastVisit: '10/10/2021',
    },
    {
      id: 2,
      name: 'Bubba',
      owner: 'Polly Keller',
      species: 'Dog',
      breed: 'Labrador',
      age: '6',
      lastVisit: '17/12/2020',
    },
    {
      id: 3,
      name: 'Bella',
      owner: 'Hank Hill',
      species: 'Cat',
      breed: 'Siamese',
      age: '8',
      lastVisit: '10/10/2020',
    },
  ]

  //create a new array by filtering the patients array
  const filteredPatients = patients.filter((patient) => {
    // no search input returns the original
    if (!searchText) {
      return patient;
    }
    else {
      // compare search input with name of the patient/owner and return matches
      if (patient.name.toLowerCase().includes(searchText) || patient.owner.toLowerCase().includes(searchText)) {
        return patient;
      }
    }
  });

  return (
    <div>
      <div className="d-flex my-3">
        <h2 className='me-3'>Patients</h2>
        <div className="search">
          <input type="search"
            className="form-control"
            placeholder="Start typing to filter..."
            aria-label="Search"
            onChange={inputHandler}
          >
          </input>
        </div>
      </div>
      <Button className='mb-3'>Add new</Button>
      {/* Modal */}
      <Table striped className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Species</th>
            <th>Last visit</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient =>
            <tr key={patient.id}>
              <td>
                <Link to={`/patients/${patient.id}`}>{patient.name}</Link>
              </td>
              <td>
                {patient.owner}
              </td>
              <td>
                {patient.species}
              </td>
              <td>
                {patient.lastVisit}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default PatientList