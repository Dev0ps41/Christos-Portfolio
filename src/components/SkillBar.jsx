const SkillBar = ({ skill, delay }) => {
    return (
      <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay={delay}>
        <div className="w-6 h-6">
          {skill.custom ? (
            <img src={skill.custom} alt={skill.name} className="w-6 h-6 object-contain" />
          ) : (
            <i className={`devicon-${skill.icon}-plain colored text-xl`} />
          )}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-800 mb-1">{skill.name}</div>
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkillBar;
  