import './main.css';
import Section from '../mcomps/section/section'; // Укажите правильный путь до ваших компонентов
import Article from '../mcomps/article/article';
import Aside from '../mcomps/aside/aside';

function Main() {
    return (
        <div className="main">
            <Section />
            <Article />
            <Aside />
        </div>
    );
}

export default Main;