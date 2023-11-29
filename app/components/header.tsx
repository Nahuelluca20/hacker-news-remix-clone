import { Link } from "@remix-run/react";

export default function Header() {
  const links = [
    {
      name: "new",
      route: "/newest",
    },
    {
      name: "comments",
      route: "/newcomments",
    },
    {
      name: "show",
      route: "/show",
    },
    {
      name: "ask",
      route: "/ask",
    },
    {
      name: "jobs",
      route: "/jobs",
    },
  ];
  return (
    <nav>
      <ul className="w-full grid flex-wrap p-2 rounded-md items-center sm:flex text-white bg-slate-700 ">
        <li className="mr-10 font-bold text-xl">
          <Link to={"/"}>Hacker News</Link>
        </li>
        <div className="flex items-center">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link className="mx-2" to={link.route}>
                  {link.name}
                </Link>
                <span className="">|</span>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
}
