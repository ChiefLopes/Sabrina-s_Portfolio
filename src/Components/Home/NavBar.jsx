const NavBar = () => {
  const menuItems = [
    "Home",
    "About",
    "Services",
    "How it works",
    "Reviews",
    "Portfolio",
  ];

  return (
    <div className="flex justify-between pt-8">
      <div>
        <h1 className="text-3xl text-blue-400 px-10">LAJ</h1>
      </div>
      <nav>
        <ul className="flex justify-between space-x-7 px-10">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer">
              {item}
            </li>
          ))}
          <li>
            <button className="bg-blue-400 flex justify-center items-center text-white rounded-md h-10 w-20 text-sm font-bold">
              <span className="whitespace-nowrap">Hire me</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default NavBar;