const NavBar = () => {
  return (
    <div className="flex justify-between pt-8 ">
      <div>
        <h1 className="text-3xl text-blue-400 px-[100px]">LAJ</h1>
      </div>
      <nav>
        <ul className="flex justify-between space-x-7  px-[170px]">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>How it works</li>
          <li>Reviews</li>
          <li>Portfolio</li>
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
