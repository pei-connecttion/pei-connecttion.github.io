import connecttion_text from '../assets/connecttion_text.png';
import github_logo from "../assets/github_logo.png"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100  py-1 min-h-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Calendar</a></li>
          </ul>
        </div>
        <a className="btn bg-base-100 border-none shadow-none">
          <img src={connecttion_text} alt="Logo" className="h-30 w-auto p-0 m-0" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li><a>Calendar</a></li>
          <li><a>Minutes</a></li>
          <li>
            <details>
              <summary>Milestones</summary>
              <ul className="p-8">
                <li><a>M1 - Inception</a></li>
                <li><a>M2 - Elaboration</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <a className="cursor-pointer px-3">
            <link></link>
            <img src={github_logo} alt="Our GitHub" className="h-6"/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;