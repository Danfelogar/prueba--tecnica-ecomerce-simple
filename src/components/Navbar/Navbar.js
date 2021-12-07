import { Link } from 'react-router-dom';

import logoEcomerce from '../../assets/img/logo-ecomerce.png'

export const Navbar = () => {
    return (
        <div className="header">
            <Link to="/product/list">
                <img className="header__logo" src={logoEcomerce} alt="ecomerce-logo" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="fas fa-search header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <Link to="/product/basket">
                    <div className="header__optionBasket">
                        <i className="fas fa-shopping-basket"></i>
                        <span className="header__optionLineTwo header__basketCount">
                        {0}
                        </span>
                    </div>
                </Link>
                <Link to="/auth/login">
                    <div className="header__option"
                    >
                        Salir
                    </div>
                </Link>
            </div>
        </div>
    )
}
