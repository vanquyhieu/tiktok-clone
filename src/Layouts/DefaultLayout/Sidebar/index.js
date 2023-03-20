import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileVideo } from '@fortawesome/free-regular-svg-icons';
import {  faHome, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import NavItems from './SidebarNavItem';
import config from '~/config';


const cx = classNames.bind(styles);
const SIDEBAR_NAV =[
    {
        icon: <FontAwesomeIcon icon={faHome} />,
        title:'For You',
        primary: true,
        to: config.routes.home,
    },
    {
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    title:'Following',
    to: config.routes.following,
    },
    {
        icon: <FontAwesomeIcon icon={faFileVideo} />,
        title:'LIVE',
        to: config.routes.search,
        },

]

function Sidebar() {
   
    return (
        <aside className={cx('wrapper')}>
                <NavItems
                items= {SIDEBAR_NAV}>
                </NavItems>
        </aside>
    );
}

export default Sidebar;