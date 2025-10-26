
export default function TeamMembers(block) {
  return (
    <>
      <style>
        {`
          .team-member-thumb {
            overflow: hidden;
            transition: transform 0.3s ease;
          }
          .team-member-thumb img {
            transition: transform 0.3s ease;
            width: 100%;
            height: auto;
          }
          .team-member-thumb:hover img {
            transform: scale(1.25);
          }
        `}
      </style>
      <div className="team">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {block.team_members.map((member, i) => (
            <div className="flex-fill" style={{ width: "200px" }} key={i}>
              <div className="team-member">
                <div
                  className="team-member-thumb rounded-box"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}'s photo`}
                    loading="lazy"
                  />
                </div>
                <div className="team-member-details text-center">
                  <h3>{member.name}</h3>
                  <div className="d-flex justify-content-center gap-3">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={block.github_icon}
                        alt="GitHub Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </a>
                    <a
                      href={member.linked_in}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={block.linked_in_icon}
                        alt="LinkedIn Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
