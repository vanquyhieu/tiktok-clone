import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

function HeaderMenu ({title, onBack}) {
    return ( 
        <header className={cx('header-menu')}>
            <button className={cx('header-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} ></FontAwesomeIcon>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
     );
}

export default HeaderMenu ;