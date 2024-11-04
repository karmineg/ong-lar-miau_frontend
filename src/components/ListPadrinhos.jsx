import React, { useState } from 'react';
import { Modal, Button, ListGroup, Form } from 'react-bootstrap';
import { getPadrinhosAPI, deletePadrinhoPorCodigoAPI, atualizarPadrinhoAPI } from '../services/padrinhosService';
import { getGatosPorPadrinhoAPI } from '../services/gatosService';
import { BsPlusCircle, BsXCircle, BsPencil } from 'react-icons/bs';

const ListPadrinhos = () => {
    const [padrinhos, setPadrinhos] = useState([]);
    const [showListaModal, setShowListaModal] = useState(false);
    const [showDetalhesModal, setShowDetalhesModal] = useState(false);
    const [showEdicaoModal, setShowEdicaoModal] = useState(false);
    const [padrinhoSelecionado, setPadrinhoSelecionado] = useState(null);
    const [dadosEdicao, setDadosEdicao] = useState({
        email: '',
        telefone: '',
        endereco: ''
    });

    const carregarPadrinhos = async () => {
        try {
            const data = await getPadrinhosAPI();
            setPadrinhos(data);
        } catch (error) {
            console.error("Erro ao buscar padrinhos:", error);
        }
    };

    const handleShowListaModal = () => {
        carregarPadrinhos();
        setShowListaModal(true);
    };

    const handleCloseListaModal = () => {
        setShowListaModal(false);
    };

    const handleShowDetalhesModal = (padrinho) => {
        setPadrinhoSelecionado(padrinho);
        setShowDetalhesModal(true);
    };

    const handleCloseDetalhesModal = () => {
        setShowDetalhesModal(false);
        setPadrinhoSelecionado(null);
    };

    const handleShowEdicaoModal = (padrinho) => {
        setPadrinhoSelecionado(padrinho);
        setDadosEdicao({
            email: padrinho.email,
            telefone: padrinho.telefone,
            endereco: padrinho.endereco
        });
        setShowEdicaoModal(true);
    };

    const handleCloseEdicaoModal = () => {
        setShowEdicaoModal(false);
        setPadrinhoSelecionado(null);
    };

    const handleDeletePadrinho = async (codigo) => {
        try {
            const gatosVinculados = await getGatosPorPadrinhoAPI(codigo);
            
            if (gatosVinculados.length > 0) {
                alert("Primeiro exclua o gato vinculado a este padrinho!");
            } else {
                await deletePadrinhoPorCodigoAPI(codigo);
                carregarPadrinhos();
                alert("Padrinho excluído com sucesso.");
            }
        } catch (error) {
            console.error("Erro ao deletar padrinho:", error);
        }
    };

    const handleUpdatePadrinho = async () => {
        try {
            const dadosAtualizados = {
                ...padrinhoSelecionado,
                ...dadosEdicao 
            };
            await atualizarPadrinhoAPI(padrinhoSelecionado.codigo, dadosAtualizados);
            carregarPadrinhos();
            handleCloseEdicaoModal();
        } catch (error) {
            console.error("Erro ao atualizar padrinho:", error);
        }
    };

    return (
        <>
            <Button onClick={handleShowListaModal} className="btn2">
                Padrinhos
            </Button>

            <Modal show={showListaModal} onHide={handleCloseListaModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Lista de Padrinhos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {padrinhos.map((padrinho) => (
                            <ListGroup.Item key={padrinho.codigo} className="d-flex justify-content-between align-items-center">
                                <span>{padrinho.nome}</span>
                                <div>
                                    <BsPlusCircle
                                        className="text-primary me-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleShowDetalhesModal(padrinho)}
                                    />
                                    <BsPencil
                                        className="text-warning me-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleShowEdicaoModal(padrinho)}
                                    />
                                    <BsXCircle
                                        className="text-danger"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleDeletePadrinho(padrinho.codigo)}
                                    />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal className="Modal" show={showDetalhesModal} onHide={handleCloseDetalhesModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes do Padrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Nome:</strong> {padrinhoSelecionado?.nome}</p>
                    <p><strong>Telefone:</strong> {padrinhoSelecionado?.telefone}</p>
                    <p><strong>Email:</strong> {padrinhoSelecionado?.email}</p>
                    <p><strong>Endereço:</strong> {padrinhoSelecionado?.endereco}</p>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal className="Modal" show={showEdicaoModal} onHide={handleCloseEdicaoModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Padrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite o email"
                                value={dadosEdicao.email}
                                onChange={(e) => setDadosEdicao({ ...dadosEdicao, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTelefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o telefone"
                                value={dadosEdicao.telefone}
                                onChange={(e) => setDadosEdicao({ ...dadosEdicao, telefone: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEndereco">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o endereço"
                                value={dadosEdicao.endereco}
                                onChange={(e) => setDadosEdicao({ ...dadosEdicao, endereco: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdatePadrinho}>
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListPadrinhos;