// eslint-disable-next-line
import {useState, forwardRef} from 'react'; 
import images from '~/asset/images'
import PropTypes from 'prop-types';

const Image = forwardRef(({src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const handleError = () =>{
        setFallback(images.noImage)
    }
    return <>
        <img 
        ref ={ref} 
        {...props} 
        src={fallback || src} 
        alt={alt} 
        onError={handleError} 
        />
    </>
})

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;