import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import Filter from '../Filter/FIlter';

const Header = ({ onChange, onClick, books }) => {

    return (
        <div className="wrapper__header">
            <div className="header__content">
                <span className="header__title">Search Books</span>
                <div className="header__input">
                    <input type="text" placeholder="Find book..." onChange={onChange}/>
                    <SearchIcon onClick={onClick} sx={{ fontSize: 43, cursor: 'pointer', position: 'relative', right: 45, top: 0, color: '#000' }} color='disabled' />
                </div>
                <Filter />
            </div>
        </div>
    )
}

export default Header;