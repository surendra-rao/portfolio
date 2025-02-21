function OfficeProjectCard({ project }) {
    return (
      <div className="p-8 h-auto flex flex-col justify-between bg-primary-bg">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold capitalize text-primary-title">
              {project.name}
            </p>
          </div>
          <p className="text-primary-text my-5 text-sm">
            {project.description}
          </p>
          
          <div className="mb-4">
            <p className="text-primary-title mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-1 text-primary-text">
                  <tech.icon className="text-primary-icon" />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <p className="text-primary-title mb-2">Key Contributions:</p>
            <ul className="list-disc list-inside text-primary-text">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="text-sm mb-1">{contribution}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default OfficeProjectCard;