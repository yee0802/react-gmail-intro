import "../styles/Header.css"

const LeftMenu = () => {
    return (
    <div className="left-menu">
        <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="gmail logo"
        />
    </div>
    )
};

const Search = () => {
    return (
    <div className="search">
        <input className="search-bar" placeholder="Search mail" />
    </div>
    )
};
 
const Header = () => {
    return (
    <header className="header">
        <LeftMenu></LeftMenu>
        <Search></Search>
    </header>
    )
};

export default Header