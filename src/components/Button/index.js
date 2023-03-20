import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import  styles  from "./Button.module.scss";
import PropTypes from "prop-types";

const cx = classnames.bind(styles);

function Button({ 
    to, 
    href, 
    children, 
    onClick, 
    primary= false, 
    outline = false, 
    small = false,
    large = false,
    textline, 
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    ...passprops
})
 {
    let Comp = "button";
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        textline,
        disabled,
        rounded,
    });
    const _props = {
        onClick,
        ...passprops,
    };
    if (to){
        Comp = Link;
        _props.to = to;
    }else if (href){
        Comp = "a";
        _props.href = href;
    }
    else if(disabled){
        delete _props.onClick;
    }
    return (
        <Comp className={classes} {..._props}>
          {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
          {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
       );
}

Button.propTypes = {
to: PropTypes.string,
href: PropTypes.string,
children: PropTypes.node.isRequired ,
onClick: PropTypes.func ,
outline : PropTypes.bool ,
small : PropTypes.bool ,
large: PropTypes.bool , 
textline: PropTypes.bool ,
disabled: PropTypes.bool , 
rounded : PropTypes.bool ,
className: PropTypes.string ,
leftIcon: PropTypes.node ,
rightIcon: PropTypes.node ,
}

export default Button;