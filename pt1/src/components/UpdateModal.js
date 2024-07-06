import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateModal = ({ show, onHide, student, onUpdate }) => {
    const [updatetedStudent, setUpdatedStudent] = useState(student);
    const [error, setError] = useState(null);

    useEffect(() => {
        setUpdatedStudent(student);
    }, [student]);

    const handleSubmit = () => {
        try {
            onUpdate(updatetedStudent);
            onHide();
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setUpdatedStudent({ ...student, [name]: value })
    }

    if (!updatetedStudent) return null;

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

export default UpdateModal;