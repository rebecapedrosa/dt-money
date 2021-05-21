import Modal from "react-modal";
import {
  Container,
  TransactionButtonsContainer,
  RadioBox,
} from "../NewTransactionModal/style";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";

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
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("deposit");

  function handleCreateNewCategory(event: FormEvent) {
    event.preventDefault();

    console.log({
      type,
      title,
      value,
      category,
    });
  }
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
      <Container onSubmit={handleCreateNewCategory}>
        <h2>Cadastrar Transações</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
        />
        <input
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          type="number"
          placeholder="Valor"
        />

        <TransactionButtonsContainer>
          <RadioBox
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            activeColor="green"
            type="button"
          >
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            activeColor="red"
            type="button"
          >
            <img src={outcomeImg} alt="Entrada"></img>
            <span>Saída</span>
          </RadioBox>
        </TransactionButtonsContainer>

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
