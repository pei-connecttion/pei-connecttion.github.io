import connecttion_text from "../assets/connecttion/connecttion_text_blue.png";
import github_logo from "../assets/github_logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 py-1 min-h-0">
      <div className="navbar-start">
        <a className="btn bg-base-100 border-none shadow-none">
          <img src={connecttion_text} alt="Logo" className="h-30" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:bg-[#cee3eb] text-[#009fba]">
              <b>Calendar</b>
            </a>
          </li>
          <li>
            <a className="hover:bg-[#cee3eb] text-[#009fba]">
              <b>Minutes</b>
            </a>
          </li>
          <li>
            <details>
              <summary className="hover:bg-[#cee3eb] text-[#009fba]">
                <b>Milestones</b>
              </summary>
              <ul className="p-8">
                <li>
                  <a>M1 - Inception</a>
                </li>
                <li>
                  <a>M2 - Elaboration</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <a className="cursor-pointer px-3">
            <img src={github_logo} alt="Our GitHub" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
