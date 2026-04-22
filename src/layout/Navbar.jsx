const navLinks = [
    { href: "#about", label: "About"},
    { href: "#projects", label: "Projects"},
    { href: "#experience", label: "Experience"},
    { href: "#testimonials", label: "Testimonials"},
]

export const Navbar = () => {
    return (
        <header> 
            <nav>
                <a href="">
                    Portfolio <span> . </span> 
                </a>
                {/* Desktop Nav */}
                <div>
                    <div>
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}