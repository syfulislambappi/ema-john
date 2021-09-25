import logo from '../images/logo.png';

export default function Header() {
    return (
        <header className="header">
            <div className="container nav-container">
                <div className="logo-container">
                    <img src={logo} alt="ema john logo" className="logo" />
                </div>
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/">Products</a>
                    <a href="/">Cart</a>
                </nav>
            </div>
        </header>
    )
}