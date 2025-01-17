import { Navbar, Footer } from "flowbite-react";
import Logo from "/src/assets/logo.svg";

const customNavLinkTheme = {
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "text-pink-900 text-white  md:bg-transparent md:text-pink-900",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50  md:border-0 md:hover:bg-transparent md:hover:text-pink-900",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
};

export default function Root() {
  return (
    <>
      <header>
        <Navbar
          fluid
          rounded
          className="bg-pink-200"
          theme={customNavLinkTheme}
        >
          <Navbar.Brand href="https://flowbite-react.com">
            <img src={Logo} className="mr-3 h-20" alt="Meal db Logo" />
            <span className="self-center whitespace-nowrap text-xl font-bold">
              MealDB
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main className="bg-pink-100 px-4 py-2.5">
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae totam facilis dignissimos nesciunt. Aperiam vero quod
            placeat ut, error autem eum odit beatae molestias veniam corporis
            officiis laboriosam perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae totam facilis dignissimos nesciunt. Aperiam vero quod
            placeat ut, error autem eum odit beatae molestias veniam corporis
            officiis laboriosam perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae totam facilis dignissimos nesciunt. Aperiam vero quod
            placeat ut, error autem eum odit beatae molestias veniam corporis
            officiis laboriosam perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae totam facilis dignissimos nesciunt. Aperiam vero quod
            placeat ut, error autem eum odit beatae molestias veniam corporis
            officiis laboriosam perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae totam facilis dignissimos nesciunt. Aperiam vero quod
            placeat ut, error autem eum odit beatae molestias veniam corporis
            officiis laboriosam perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            recusandae totam facilis dignissimos nesciunt. Aperiam vero quod
            placeat ut, error autem eum odit beatae molestias veniam corporis
            officiis laboriosam perspiciatis!
          </p>
        </div>
      </main>
      <Footer fluid className="bg-pink-200 px-2 py-2.5">
        <Footer.Copyright href="#" by="Coding Front™" year={2024} />
      </Footer>
    </>
  );
}
