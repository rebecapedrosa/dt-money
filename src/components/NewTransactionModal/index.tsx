import Modal from "react-modal";
import { Container } from "../NewTransactionModal/style";

interface NewTransactionModalProps {
  onOpenNewTransactionModalOpen: boolean;
  onHandleCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
  onOpenNewTransactionModalOpen,
  onHandleCloseNewTransactionModal,
}: NewTransactionModalProps) {
  return (
    <Container>
      <Modal
        isOpen={onOpenNewTransactionModalOpen}
        onRequestClose={onHandleCloseNewTransactionModal}
      ></Modal>
    </Container>
  );
}
