import Link from "next/link"

const Navbar = () => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/contact", label: "Contact" },
        { href: "/about", label: "About" },
    ]
    return (
        <div>
            <nav className="flex justify-between items-center bg-slate-800 p-2">
                <div>
                    <h1 className="text-slate-200 text-2xl font-bold">Next.js Workshop</h1>
                </div>
                <ul className=" flex justify-end gap-3">
                    {links.map((link) => {
                        return (
                            <li key={link.href}><Link className="bg-slate-200 rounded-lg px-2 py-1" href={link.href}>{link.label}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Navbar