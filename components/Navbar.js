import Link from "next/link"

const Navbar = () => {
    const links = [
        { href: "/", label: "home" },
        { href: "/projects", label: "projects" },
        { href: "/dashboard", label: "dashboard" },
        { href: "/contact", label: "contact" },
        { href: "/about", label: "about" },
    ]
    return (
        <div>
            <nav className="container mx-auto px-4 flex justify-between items-center bg-slate-800 p-2">
                <div>
                    <h1 className="text-slate-200 text-2xl font-bold">
                        <Link href={"/"}>Next.js WS</Link>
                    </h1>
                </div>
                <ul className=" flex justify-end gap-3">
                    {links.map((link) => {
                        return (
                            <li key={link.href}><Link className="bg-slate-200 rounded-lg px-2 py-1 hover:bg-slate-300 capitalize" href={link.href}>{link.label}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Navbar