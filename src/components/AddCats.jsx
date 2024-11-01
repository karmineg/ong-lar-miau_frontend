import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { cadastraGatoAPI } from '../services/gatosService';
import GatoContext from '../context/GatoContext';

const AddCats = () => {
    const { gatos, setGatos } = useContext(GatoContext);
    const [descricao, setDescricao] = useState('');
    const [vacinas, setVacinas] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setDescricao('');
        setVacinas('');
    };
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoGato = {
            descricao,
            vacinas,
            nome: null,
            padrinhoId: null
        };

        try {
            const gatoCadastrado = await cadastraGatoAPI(novoGato, 'POST');
            setGatos([...gatos, gatoCadastrado]);
            handleClose();
        } catch (error) {
            console.error("Erro ao cadastrar o gato: ", error);
        }
    };

    return (
        <>
            <Button className="btn2" onClick={handleShow}>
                Adicionar Gato
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Gato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Descreva o gato"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="Modal-form" controlId="formVacinas">
                            <Form.Label>Vacinas</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Vacinas do gato"
                                value={vacinas}
                                onChange={(e) => setVacinas(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Adicionar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddCats;
