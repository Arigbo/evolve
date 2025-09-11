export function Contact({ isModalOpen, setIsModalOpen }) {
  return (
    <div
      id="contact-modal"
      className={`modal ${isModalOpen ? "open" : ""}`}
      onClick={(e) => e.target.id === "contact-modal" && setIsModalOpen(false)}
    >
      <div className="modal-content">
        <div className="modal-content-desc">
          <i className="fas fa-x modal-close-button" onClick={()=>{setIsModalOpen(false)}}></i>
          <h3 className="modal-title">Get in Touch</h3>
          <p className="modal-subtitle">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <form id="contact-form" className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="form-buttons">
            <button
              type="button"
              className="cancel-button"
              onClick={()=>{setIsModalOpen(false)}}
            >
              Cancel
            </button>
            <button type="submit" className="cta-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
