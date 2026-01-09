export type ModalProps = {
  title: string;
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};
