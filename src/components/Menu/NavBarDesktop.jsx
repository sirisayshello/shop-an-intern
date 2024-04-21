export const NavBarDesktop = ({ visibility, navAbout }) => {
  return (
    <div className={`flex gap-4 ${visibility}`}>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              className="hover:text-black/50"
              href="https://github.com/sirisayshello"
              target="_blank"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a
              className="hover:text-black/50"
              href="https://www.linkedin.com/in/siri-sj%C3%B6lin-89481417b/"
              target="_blank"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <p
              onClick={navAbout}
              className="hover:text-black/50 hover:cursor-pointer"
            >
              ABOUT
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
