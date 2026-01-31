import { itemsNavbar } from "@/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-4 z-40 flex items-center justify-center w-full">
      <nav>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="px-3 py-2 transition-colors duration-150 rounded-full hover:bg-orange-500"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
