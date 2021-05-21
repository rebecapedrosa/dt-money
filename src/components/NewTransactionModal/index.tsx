import Modal from "react-modal";
import {
  Container,
  TransactionButtonsContainer,
  RadioBox,
} from "../NewTransactionModal/style";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

Modal.setAppElement("#root");
interface NewTransactionModalProps {
  onOpen: boolean;
  OnRequestClose: () => void;
}

export function NewTransactionModal({
  onOpen,
  OnRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  console.log({ type });
  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={OnRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close">
        <img src={closeImg} alt="Fechar" onClick={OnRequestClose}></img>
      </button>
      <Container>
        <h2>Cadastrar Transações</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionButtonsContainer>
          <RadioBox
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            activeColor = "green"
            type="button"
          >
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            activeColor = "red"
            type="button"
          >
            <img src={outcomeImg} alt="Entrada"></img>
            <span>Saída</span>
          </RadioBox>
        </TransactionButtonsContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
