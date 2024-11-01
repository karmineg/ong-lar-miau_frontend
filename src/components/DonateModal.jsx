import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DonateModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="btn1" onClick={handleShow}>
                Doar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Obrigado por querer ajudar!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Seu apoio é fundamental para nós! 💖</p>
                    <p><strong>Chave Pix:</strong> aefce8d1-1abb-41d1-929f-152e059ff2cd</p>
                    <p>Com sua doação, podemos continuar a cuidar dos nossos gatinhos e oferecer a eles um lar cheio de amor.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DonateModal;
