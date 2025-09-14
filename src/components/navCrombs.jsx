export  function NavCrumbs() {
  return (
    <div className="breadcrumbs-container">
      <div className="breadcrumbs">
        <a href="/course">Courses</a>
        <span>&gt;</span>
        <span>Frontend</span>
      </div>
      <a className="next">
        <a href="/course/backend">Backend Course</a>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
