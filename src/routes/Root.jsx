import { Navbar, Footer, Spinner } from "flowbite-react";
import "../App.css";
import { Outlet, Link, useNavigation, NavLink } from "react-router-dom";
export default function Root() {
  const customNavLinkTheme = {
    link: {
      active: {
        on: "text-secondery hover:text-black hover:duration-300",
        off: "hover:text-secondery hover:duration-300",
      },
      disabled: {
        on: "text-black10",
        off: "",
      },
    },
  };
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <header className="border-b-2 border-black10">
        <Navbar fluid rounded className="mx-16 py-5" theme={customNavLinkTheme}>
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-2xl font-semibold font-lobester">
              Foodland
            </span>
            <span className=" text-2xl font-semibold font-lobester text-secondery">
              ...
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 gap-5 items-center">
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FTheDataDB%2F">
              <svg
                className="w-6 h-6 text-gray-800 hover:text-secondery  duration-200 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://twitter.com/x/migrate?tok=7b2265223a222f546865417564696f4442222c2274223a313733363734393035307d16ad6b883717876adcdfe1bc3c5677c3">
              <svg
                className="w-6 h-6 text-gray-800 hover:text-secondery  duration-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://discord.com/invite/pFvgaXV">
              <svg
                className="w-6 h-6 text-gray-800 hover:text-secondery  duration-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="font-Inter text-base font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? customNavLinkTheme.link.active.on
                  : customNavLinkTheme.link.active.off
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? customNavLinkTheme.link.active.on
                  : customNavLinkTheme.link.active.off
              }
            >
              Category
            </NavLink>
            <NavLink
              to="/ingredient"
              className={({ isActive }) =>
                isActive
                  ? customNavLinkTheme.link.active.on
                  : customNavLinkTheme.link.active.off
              }
            >
              Ingredients
            </NavLink>
            <NavLink
              to="/areas"
              className={({ isActive }) =>
                isActive
                  ? customNavLinkTheme.link.active.on
                  : customNavLinkTheme.link.active.off
              }
            >
              Area
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? customNavLinkTheme.link.active.on
                  : customNavLinkTheme.link.active.off
              }
            >
              About Us
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </header>
      {isLoading && (
        <div className="text-center py-14">
          <Spinner color="warning" />
          <p className="font-lobester mt-3">Meal is Loading ...</p>
        </div>
      )}
      <main className="mb-12 mt-5 max-w-7xl mx-auto">
        {!isLoading && <Outlet />}
      </main>
      <Footer fluid className="shadow-none">
        <Footer.Copyright
          className="border-t-2 border-black10 w-11/12  mx-10 py-5 text-black60"
          href="#"
          by="Sara Khalili"
          year={2025}
        />
      </Footer>
    </>
  );
}
