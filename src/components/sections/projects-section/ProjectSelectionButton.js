const ProjectSelectionButton = ({ text, icon, onClick }) => (
  <div className="all-btns project-button" onClick={onClick}>
      <div className="project-button-icon">
          <i className={`fa-solid ${icon} fa-2xl`}></i>
      </div>
      <h5 className="project-button-text">{text}</h5>
  </div>
)

export default ProjectSelectionButton