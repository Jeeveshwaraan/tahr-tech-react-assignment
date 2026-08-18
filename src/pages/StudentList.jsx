import { useEffect, useState } from 'react'
import '../App.css'
function StudentList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getStudents() {
      try {
        const response = await fetch('https://dummyjson.com/users')

        if (!response.ok) {
          throw new Error('Failed to get students')
        }

        const data = await response.json()

        setStudents(data.users)
      } catch (error) {
        setError('Could not load student list')
      } finally {
        setLoading(false)
      }
    }

    getStudents()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className="student-page">
  <h1>Student List</h1>

      <table className="student-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList  