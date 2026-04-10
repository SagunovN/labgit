import './section.css';
import appleImg from './apple.png';

function Section() {
    return (
        <div className="section">
            <div className="side-logo">
                <img src={appleImg} alt="Логотип Яблоко" className="side-apple-icon" />
                <h2 className="side-logo-text">ЗЕЛЕНОЕ ЯБЛОКО</h2>
            </div>
        </div>
    );
}

export default Section;