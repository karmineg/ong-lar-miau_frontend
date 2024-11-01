import React, { useState } from 'react';
import PatronForm from './PatronForm';
import { Modal, Button } from 'react-bootstrap';

const Cats = ({ gato }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showPatronForm, setShowPatronForm] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(true);
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
    };

    const handlePatronClick = () => {
        setShowPatronForm(true);
    };

    return (
        <>
            <Button onClick={handleShowInfo} className="btn btn-primary">
                Exibir mais informações
            </Button>

            {/* Modal for Gato Information */}
            <Modal show={showInfo} onHide={handleCloseInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações do Gato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Nome:</strong> {gato.nome || "Não disponível"}</p>
                    <p><strong>Descrição:</strong> {gato.descricao || "Não disponível"}</p>
                    <p><strong>Vacinas:</strong> {gato.vacinas || "Não disponível"}</p>
                    <p><strong>Padrinho:</strong> {gato.padrinho_nome || "Não tem padrinho"}</p>

                    {!gato.padrinho_nome && (
                        <Button onClick={handlePatronClick} className="btn btn-secondary">
                            Apadrinhar
                        </Button>
                    )}
                </Modal.Body>
            </Modal>

            {showPatronForm && (
                <PatronForm gato={gato} setShowPatronForm={setShowPatronForm} />
            )}
        </>
    );
};

export default Cats;
