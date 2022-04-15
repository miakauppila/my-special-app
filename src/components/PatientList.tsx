import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'

const PatientList = () => {

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

  return (
    <div>
      <h2 className='mt-3'>Patients</h2>
      {/* <SearchBar> */}
      <Button>Add new</Button>
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
          {patients.map(patient =>
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