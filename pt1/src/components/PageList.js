import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './AddModal';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import jsonData from '../Json/Student.json';


const PageList = () => {
    const [students, setStudents] = useState([]);
    const [FilteredStudents, setFilteredStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('All');
    const [error, setError] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const fetchStudents = () => {
            try {
                const data = jsonData.students;
                setStudents(data);
                setFilteredStudents(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching customers:', error);
            }
        };

        fetchStudents();
    }, []);

    useEffect(() => {
        let filtered = students;

        if (searchTerm) {
            filtered = filtered.filter(student =>
                student.student_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredStudents(filtered);
    }, [searchTerm, filterBy, students]);

    const handleAdd = (newStudent) => {
        const addStudent = {
            student_id: students.length + 1,
            student_name: newStudent.student_name,
            student_class: newStudent.student_class
        }
        setStudents([...students, addStudent]);
        setFilteredStudents([...students, addStudent]);
    };

    const handleUpdate = (updatedStudent) => {
        const updatedStudents = students.map((student) =>
            student.student_id === updatedStudent.student_id ? updatedStudent : student
        );
        setStudents(updatedStudents);
        setFilteredStudents(updatedStudents);
    };

    const handleDelete = (studentId) => {
        const updatedStudents = students.filter(
            (student) => student.student_id !== studentId
        );
        setStudents(updatedStudents);
        setFilteredStudents(updatedStudents);
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-between align-items-center mb-3">
                <h1>Student Lists</h1>
                <Button variant="primary" onClick={() => setShowAddModal(true)}>+ Student</Button>
            </Row>
            <Row className="justify-content-between align-items-center mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="Search by Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form.Group>
            </Row>
            {error && <p className="text-danger">Error: {error}</p>}
            <Table hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {FilteredStudents.map((student) => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>{student.student_name}</td>
                            <td>{student.student_name}</td>
                            <td>
                                <Button className="btn-warning btn-sm mr-2" onClick={() => {
                                    setSelectedStudent(student);
                                    setShowUpdateModal(true);
                                }}>Edit</Button>
                                <Button className="btn-danger btn-sm" onClick={() => {
                                    setSelectedStudent(student);
                                    setShowDeleteModal(true);
                                }}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="justify-content-between align-items-center">
                <span>1-5 of {FilteredStudents.length} results</span>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Row>
            <AddModal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}
                onAdd={handleAdd}
            />
            <UpdateModal
                show={showUpdateModal}
                onHide={() => setShowUpdateModal(false)}
                customer={selectedStudent}
                onUpdate={handleUpdate}
            />
            <DeleteModal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                customer={selectedStudent}
                onDelete={handleDelete}
            />
        </Container>
    )
}

export default PageList
