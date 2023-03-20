import Button from "~/components/Button";
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function NavItem({data}) {
   return(
      data.primary ?(
      
         <Button 
         className={cx('nav-item')} 
         primary 
         leftIcon = {data.icon} 
         to={data.to}>
         {data.title}
         </Button>
      ):  
      (
      <Button 
      className={cx('nav-item')} 
      leftIcon = {data.icon} 
      to={data.to}
      >
      {data.title}
      </Button>)
   ) 
    }

export default NavItem;