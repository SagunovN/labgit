import { Link } from 'react-router-dom';
import './head.css';

function Head() {
    return (
        <div className="head">
            <div className="nav-links">
                <Link to="/news">Новости</Link>
                <Link to="/about">О проекте</Link>
                <Link to="/contacts">Контакты</Link>
            </div>
        </div>
    );
}

export default Head;