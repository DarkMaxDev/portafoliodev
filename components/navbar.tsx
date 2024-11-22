import { itemsNavbar } from "@/data";
import { Link } from "lucide-react";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
return(
    <nav className="fixed <-20 flex flex-col items-center w-full mt-auto 
    justify-center h-max bottom-20">
    <div className="flex items-center gap-2 justify-center px-4 py-1 dark:bg-white/10
     bg-slate-800/10 background-blur-sm rounded-full">

    <ToggleTheme />
</div>
</nav>
);
}
export default Navbar;