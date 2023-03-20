import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames/bind";
import style from "./AccountItem.module.scss"
import { Link } from "react-router-dom";
import PropsTypes from 'prop-types'; 
const cx = classNames.bind(style);

function AccountItem({data}) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <img className={cx('avatar')} 
            src={data.avatar} 
            alt={data.full_name} ></img>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>{data.full_name} </span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </div>
                <div className={cx('desc')}>
                    <span>{data.nickname} </span>
                </div>
            </div>
        </Link>
     );
}

AccountItem.propsTypes = {
    data: PropsTypes.object.isRequired
}

export default AccountItem;