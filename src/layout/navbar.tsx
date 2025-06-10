import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Burger, Drawer, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.png";
import { ROUTES } from "../constants/routes";

const productSubLinks = [
  {
    href: `${ROUTES.test}/life-development-skills`,
    label: "Life Skills Development",
  },
  {
    href: `${ROUTES.test}/community`,
    label: "Community Engagement",
  },
];

const NavBar = () => {
  const location = useLocation();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [
    isMobileMenuOpen,
    { toggle: toggleMobileMenu, close: closeMobileMenu },
  ] = useDisclosure(false);

  const getLinkClassName = (href: string) => {
    const isActive =
      href === ROUTES.HOME
        ? location.pathname === href
        : location.pathname === href ||
          location.pathname.startsWith(href + "/");
    return `transition-colors tracking-wider hover:text-[#F16722] ${
      isActive ? "text-[#F16722] font-semibold" : "text-[#5C6C72]"
    }`;
  };

  const toggleProductDropdown = () => {
    setIsProductOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsProductOpen(false);
  };

  const closeAll = () => {
    closeDropdown();
    closeMobileMenu();
  };

  return (
    <div className="bg-white font-clash-regular relative shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <NavLink to={ROUTES.HOME} onClick={closeAll}>
            <img src={logo} alt="Logo" className="h-8 sm:h-10" />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            <li>
              <NavLink
                to={ROUTES.HOME}
                className={getLinkClassName(ROUTES.HOME)}
                onClick={closeDropdown}
              >
                <p className="text-base">Home</p>
              </NavLink>
            </li>

            <li className="relative">
              <button
                className={`flex items-center gap-1.5 ${getLinkClassName(
                  ROUTES.test
                )}`}
                onClick={toggleProductDropdown}
                aria-expanded={isProductOpen}
                aria-controls="product-dropdown"
              >
                <p className="text-base">Products</p>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isProductOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* {isProductOpen && (
                <div
                  id="product-dropdown"
                  className="absolute top-full left-0 mt-2 bg-[#48D1CC] shadow-lg rounded-md p-2 min-w-[200px] z-50"
                >
                  {productSubLinks.map(({ href, label }) => (
                    <NavLink
                      key={href}
                      to={href}
                      className="block py-2 px-4 text-white hover:text-[#48D1CC] hover:bg-[#EFFBFA] rounded transition-colors"
                      onClick={closeAll}
                    >
                      <p className="font-medium text-sm">{label}</p>
                    </NavLink>
                  ))}
                </div>
              )} */}
            </li>

            <li>
              <NavLink
                to={ROUTES.PRICING}
                className={getLinkClassName(ROUTES.PRICING)}
                onClick={closeDropdown}
              >
                <p className="text-base">Pricing</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.test}
                className={getLinkClassName(ROUTES.test)}
                onClick={closeDropdown}
              >
                <p className="text-base">Company</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.CONTACT}
                className={getLinkClassName(ROUTES.CONTACT)}
                onClick={closeDropdown}
              >
                <p className="text-base">Contact</p>
              </NavLink>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <Link to="/login">
              <Button
                variant="outline"
                color="#F16722"
                radius="md"
                size="md"
                styles={{
                  root: {
                    padding: "8px 20px",
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                  },
                }}
              >
                Log In
              </Button>
            </Link>
            <Button
              variant="filled"
              color="#F16722"
              radius="md"
              size="md"
              styles={{
                root: {
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                },
              }}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Burger */}
          <div className="md:hidden">
            <Burger
              opened={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              color="#F16722"
              size="md"
              aria-label="Toggle navigation menu"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={isMobileMenuOpen}
        onClose={closeAll}
        position="right"
        size="xs"
        withCloseButton={true}
        closeButtonProps={{ "aria-label": "Close navigation menu" }}
        styles={{
          content: { backgroundColor: "#fff" },
          header: { padding: "16px" },
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          <NavLink
            to={ROUTES.HOME}
            className={getLinkClassName(ROUTES.HOME)}
            onClick={closeAll}
          >
            <p className="text-base font-medium py-2">Home</p>
          </NavLink>

          <div>
            <button
              className={`flex items-center justify-between w-full text-left ${getLinkClassName(
                ROUTES.test
              )}`}
              onClick={toggleProductDropdown}
              aria-expanded={isProductOpen}
              aria-controls="mobile-product-dropdown"
            >
              <p className="text-base font-medium py-2">Products</p>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  isProductOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductOpen && (
              <div id="mobile-product-dropdown" className="pl-4 mt-2 space-y-2">
                {productSubLinks.map(({ href, label }) => (
                  <NavLink
                    key={href}
                    to={href}
                    className="block text-[#5C6C72] hover:text-[#48D1CC] text-sm font-medium py-2"
                    onClick={closeAll}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to={ROUTES.PRICING}
            className={getLinkClassName(ROUTES.PRICING)}
            onClick={closeAll}
          >
            <p className="text-base font-medium py-2">Pricing</p>
          </NavLink>

          <NavLink
            to={ROUTES.test}
            className={getLinkClassName(ROUTES.test)}
            onClick={closeAll}
          >
            <p className="text-base font-medium py-2">Company</p>
          </NavLink>

          <NavLink
            to={ROUTES.CONTACT}
            className={getLinkClassName(ROUTES.CONTACT)}
            onClick={closeAll}
          >
            <p className="text-base font-medium py-2">Contact</p>
          </NavLink>

          <Group grow className="mt-4">
            <Button
              component={Link}
              to="/login"
              variant="outline"
              color="#F16722"
              radius="md"
              size="md"
              styles={{ root: { height: "48px", fontSize: "14px" } }}
              onClick={closeAll}
            >
              Log In
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="filled"
              color="#F16722"
              radius="md"
              size="md"
              styles={{ root: { height: "48px", fontSize: "14px" } }}
              onClick={closeAll}
            >
              Sign Up
            </Button>
          </Group>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
