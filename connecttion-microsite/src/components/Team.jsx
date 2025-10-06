import { team } from "../content/team.json";
import github_logo from "../assets/github_logo.png";
import linkedIn_logo from "../assets/linked-in-logo.png";

function Team() {
  const publicImagePath = "/src/assets/team/";

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {team.map((element, index) => {
        const card = (
          <div className="flex flex-col max-w-sm rounded-lg shadow-sm overflow-hidden">
            <div key={index} className="w-full h-64 bg-none relative">
              <img
                src={`${publicImagePath}${element.image}`}
                alt={`Image of ${element.name}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-[#009fba] mb-1">
                {element.name}
              </h3>
              <div className="flex gap-3 justify-center">
                <a href={element.gitHub}>
                  <img
                    src={github_logo}
                    alt={`${element.name}'s GitHub`}
                    className="inline-block w-5 h-5 mr-1"
                  />
                </a>
                <a href={element.gitHub}>
                  <img
                    src={linkedIn_logo}
                    alt={`${element.name}'s LinkedIn`}
                    className="inline-block w-5 h-5 mr-1"
                  />
                </a>
                {element.linkedIn && <a href={element.linkedIn}>LinkedIn</a>}
              </div>
            </div>
          </div>
        );
        return card;
      })}
    </div>
  );
}

export default Team;
