import React from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/asset/images';
import Button from '~/components/Button';
import config from '~/config';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faKeyboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';

import { faCoins, faEarthAsia, faEllipsisVertical, faShare, faSignOut, faSpaghettiMonsterFlying, faUpload } from '@fortawesome/free-solid-svg-icons';


import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',

    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/feedback',

    },
    {
        icon: <FontAwesomeIcon icon={faSpaghettiMonsterFlying} />,
        title: 'Settings',
        to: '/feedback',

    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/feedback',
        separate: true,
    },
]

function Header() {
    
   

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                break;
                default:
        }
    }
    // currentUser

    const currentUser = false;
    

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
              <Link to={config.home} className={cx('logo-link')}>
                <img src={images.logo} alt="tik-tok" />
              </Link>
                <Search></Search>
                        {/* nav-right */}       
                <div className={cx('actions')}>
                {
                    currentUser ? (
                        <>
                            <Tippy content="upload video">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faUpload} ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy content="share video">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faShare} ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy content="messages">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </> 
                        ):
                        <>
                        <Button textline>Register</Button>
                        <Button primary>Log in</Button>
                        </>
                }
                        <Menu
                        items = {currentUser? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                            <Image src='' className={cx('user-avatar')} alt='hieu'/>
                        ) :(
                            
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                            
                        )}
                        </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;