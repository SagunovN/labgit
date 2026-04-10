import './section.css';
import appleImg from './apple.png'; // Картинка теперь должна лежать в этой папке

function Section() {
    return (
        <div className="section">
            <div className="side-logo">
                <img src={appleImg} alt="Логотип Яблоко" className="side-apple-icon" />
                <h2 className="side-logo-text">ЗЕЛЕНОЕ ЯБЛОКО</h2>
            </div>

            {/* Здесь можно добавить дополнительный текст или меню левой колонки, если нужно */}
        </div>
    );
}

export default Section;