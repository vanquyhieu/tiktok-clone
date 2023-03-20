import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classnames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classnames.bind(styles);

const defaultFn = () =>{};

function Menu({children, items = [], onChange = defaultFn, hideOnClick= false}) {
    
    const[history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1];


    const renderItems = () =>{

        return current.data.map((item, index) =>{
            const isParent = !!item.children;
            
            return (
            <MenuItem 
            key = {index} 
            data = {item} 
            onClick = {()=>{
                if (isParent) {
                    setHistory((prev) => [...prev, item.children])
                        }
                else{
                    onChange(item);
                }
            }}
            />
            )
    })
    }
    return ( 
    <Tippy 
        interactive
        delay={[0, 500]}
        placement='bottom-end'
        hideOnClick={hideOnClick}
        //onhide
        onHide={()=>{setHistory(prev => prev.slice(0, 1))}}
            render={attrs => (
                <div className={cx('menu-items')}  tabIndex="0" {...attrs}>
                <PopperWrapper>{
                    history.length > 1 &&
                    <HeaderMenu 
                    title='langues' 
                    onBack={()=>{
                        setHistory((prev) => prev.slice(0, prev.length - 1))
                    }}/>
                }
                     <div className={cx('menu-body')}>{renderItems()}</div>
                </PopperWrapper>
                </div>
              )}
            >
                {children}
                </Tippy> );

}

export default Menu;