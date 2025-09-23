export default function CourseCTA({ course }) {
  return (
    <section className="section cta-section">
      <div className="section-header">
        <h2 className="section-title">Are you an expert in {course}?</h2>
      </div>
      <p className="section-subtitle">
        Join our team of experienced mentors and help others build their digital
        literacy skills.
      </p>
      <button
        onClick={() => setIsMentorRedirectModalOpen(true)}
        className="cta-button"
      >
        Work with Us
      </button>
    </section>
  );
}
