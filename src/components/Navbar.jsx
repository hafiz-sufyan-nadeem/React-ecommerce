import { MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'


const Navbar = ({location}) => {

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-7">
          {/* Logo */}
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>

          {/* Address */}
          <div className="flex items-center gap-1 cursor-pointer text-gray-700">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div className="-space-y-2">
                <p>{location.county}</p>
                <p>{location.state}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>

          {/* Menu */}
          <nav>
            <ul className="flex items-center gap-7 text-xl font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-3 border-red-500" : "text-black"
                    } cursor-pointer transition-all`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-3 border-red-500" : "text-black"
                    } cursor-pointer transition-all`
                  }
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-3 border-red-500" : "text-black"
                    } cursor-pointer transition-all`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-3 border-red-500" : "text-black"
                    } cursor-pointer transition-all`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Cart Section */}
        <Link to="/cart" className="relative ml-8">
          <IoCartOutline className="h-7 w-7" />

          <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
            0
          </span>
        </Link>

        <div>
          <Show when="signed-out">
            <SignInButton className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer' />
            <SignUpButton />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
