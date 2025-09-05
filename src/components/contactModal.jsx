export default function Modal({
  children,
  isModalOpen,
  setIsModalOpen,
}) {
  return (
    <div
      id="modal"
      className={`modal-overlay ${isModalOpen ? "open" : ""}`}
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      <div className="modal-body">{children}</div>
    </div>
  );
}
