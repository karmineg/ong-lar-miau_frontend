import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PadrinhoContext from '../context/PadrinhoContext';

const PatronForm = ({ gato, setShowPatronForm }) => {
    const { adicionarPadrinho } = useContext(PadrinhoContext);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [nomeGato, setNomeGato] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const padrinhoData = { nome, telefone, endereco, email, nomeGato };
        await adicionarPadrinho(padrinhoData, gato.codigo, gato.descricao, gato.vacinas);
        setShowPatronForm(false); 
    };

    return (
        <Modal className="Modal" show={true} onHide={() => setShowPatronForm(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Apadrinhe {gato.nome || "um gatinho"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Seu Nome</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={telefone} 
                            onChange={(e) => setTelefone(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formEndereco">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={endereco} 
                            onChange={(e) => setEndereco(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="Modal-form" controlId="formNomeGato">
                        <Form.Label>Nome para o Gato</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nomeGato} 
                            onChange={(e) => setNomeGato(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Confirmar Apadrinhamento
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PatronForm;
