import  {useEffect, useState, useRef} from 'react';
import HeaderLessTippy from '@tippyjs/react/headless';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchServices';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import classnames from 'classnames/bind';
import styles from './Search.module.scss'

const cx = classnames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult]= useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if(!debounced.trim()){
            setSearchResult([]);
            return;
        }
        const fetchApi = async ()=> {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        }
        fetchApi()
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleClear = () => {
        setSearchResult([]);
        setSearchValue ('');
        inputRef.current.focus();
    }
    
    const handleChange = (e) =>{
       const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }
    };
    const handleSumit = (e) => {
        e.preventDefault();
    }

    return (
// tippy warning

  <div>
      <HeaderLessTippy 
                    interactive
                    visible={showResult && searchResult.length > 0} 
                    onClickOutside={handleHideResult}
                
                        render={attrs => (
                            <div className={cx('box')} tabIndex="0" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('box-title')}>accouts</h4>
                                {searchResult.map(result =>(
                                <AccountItem key = {result.id} data={result} />
                                    ))} 
                            </PopperWrapper>
                            </div>
                          )}
                        >
                    <div className={cx('search')}>
                   
                        <input
                         ref={inputRef}
                         value={searchValue}
                         onChange={handleChange}
                         placeholder="Search accout and video" 
                         spellCheck={false} 
                         onFocus={() => setShowResult(true)}
                         />
                        {!!searchValue && !loading && (
                        <button 
                        className={cx('close')}
                        onClick={handleClear}
                        >
                        <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        )}
                        { loading &&
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                       }
                            <button onMouseDown={handleSumit} className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>
        </HeaderLessTippy>
  </div>
      );
}

export default Search;
