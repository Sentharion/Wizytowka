import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center bg-slate-950 px-6 py-2 text-white font-roboto">
                <a href="#" className="flex flex-col items-center gap-0 max-w-16 ml-64">
                    <p className="text-2xl text-violet-500 m-0 leading-relaxed">&lt;/&gt;</p>
                    <p className="text-xl font-bold m-0 leading-none">M<span className="text-violet-500">B</span></p>
                </a>

                <ul className="flex items-center gap-6 mr-80 text-gray-300">
                    <li>
                        <a href="#" className="hover:text-violet-500 transition-colors duration-150 py-1">Usługi</a>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-violet-500 transition-colors duration-150 py-1">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-violet-500 transition-colors duration-150 py-1">O mnie</Link>
                    </li>
                    <li>
                        <a href="#" className="hover:text-violet-500 transition-colors duration-150 py-1">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;