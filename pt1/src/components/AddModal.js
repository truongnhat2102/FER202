import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const AddModal = ({ show, onHide, onAdd }) => {
    const [student, setStudent] = useState({
        student_id: '',
        student_name: '',
        student_class: ''
    });
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        try {
            onAdd(student);
            onHide();
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value })
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formStudentName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="student_name"
                            value={student.student_name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formStudentClass'>
                        <Form.Label>Class</Form.Label>
                        <Form.Control
                            type="text"
                            name="student_class"
                            value={student.student_class}
                            onChange={onChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Student
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddModal
