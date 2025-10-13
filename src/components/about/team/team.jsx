import GlanceHover from '../GlanceHover.jsx';

export default function AboutTeam(block) {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-7 mx-auto">
            <div className="section-header">
              <h2>{block.title}</h2>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {block.team_members.map((member, i) => (
            <div className="flex-fill" style={{ width: '200px'}} key={i}>
              <div className="team-member">
                <GlanceHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderRadius="inherit"
                  borderColor="transparent"
                  glareColor="#ffffff"
                  glareOpacity={0.4}
                  glareAngle={-45}
                  glareSize={200}
                  transitionDuration={600}
                  playOnce={false}
                  className="team-member-thumb rounded-box"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}'s photo`}
                    loading="lazy"
                  />
                </GlanceHover>
                <div className="team-member-details text-center">
                  <h3>{member.name}</h3>
                  <div className="d-flex justify-content-center gap-3">
                  <a href={member.github}  target="_blank" rel="noopener noreferrer">
                    <img src={block.github_icon} alt="GitHub Icon" style={{ width: '20px', height: '20px' }} />
                  </a>
                  <a href={member.linked_in}  target="_blank" rel="noopener noreferrer">
                    <img src={block.linked_in_icon} alt="LinkedIn Icon" style={{ width: '20px', height: '20px' }} />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
