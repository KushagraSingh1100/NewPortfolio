const Navbar = () => {
    return (
        <nav className="nav">
            <div className="portfolio">
            <a href="/"><h3>Portfolio</h3></a>
            </div>
            <div className="links">
            <a href="#about"><h3>ABOUT</h3></a>
            <a href="#projects"><h3>PROJECTS</h3></a>
            <a href="#contact"><h3>CONTACT</h3></a>
            </div>
        </nav>
    );
}
 
export default Navbar;