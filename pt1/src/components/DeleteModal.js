import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ show, onHide, student, onDelete }) => {
    const [error, setError] = useState(null);

    const handleDelete = () => {
        try {
            onDelete(student.student_id);
            onHide();
        } catch (error) {
            console.log(error)
        }
    }

    if (!student) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this student <strong>{student.student_name}</strong>?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete Student
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
