export default function Modal({ title, description, onClose }) {
  return (
    <dialog>
      <h1>{title}</h1>
      <button onClick={onClose}>Fechar</button>
    </dialog>
  );
}
