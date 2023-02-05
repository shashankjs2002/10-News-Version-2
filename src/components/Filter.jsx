import { computeHeadingLevel } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchContext from '../context/SearchContext'

const Filter = () => {
    const navigate = useNavigate()

    const context = useContext(SearchContext)
    const {filters, setFilters} = context
    
    useEffect(() => {
      navigate(`/${filters.country}/${filters.lang}/${filters.category}`)
    }, [filters])
    
    
    // const [filters, setFilters] = useState({lang:"en", country:"in" })
    const onchange = (e) => {
       
        // localStorage.setItem('filter', e.target.value)
        // setFilters(e.target.value)
        setFilters({...filters, [e.target.name]: e.target.value})
        console.log(filters)
        // navigate(`/home/${filters.country}/${filters.lang}`)  
    }

    
    return (
        <div className='filter'>

            <div className='ans'>
                {/* <label htmlFor="lang">English</label> */}
                <select style={{width:'max-content'}} name="lang" onChange={onchange} value={filters.lang}>
                    <option value="ar">Arabic</option>
                    <option value="zh">Chinese</option>
                    <option value="nl">Dutch</option>
                    <option value="en" >English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="he">Hebrew</option>
                    <option value="hi" defaultValue>Hindi</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ml">Malayalam</option>
                    <option value="mr">Marathi</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ro">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                    <option value="sv">Swedish</option>
                    <option value="ta">Tamil</option>
                    <option value="te">Telugu</option>
                    <option value="uk">Ukrainian</option>
                    
                </select>
                {/* <input type="" name="iglink" id="" placeholder='Message' /> */}
            </div>
            <div className='ans'>
                {/* <label htmlFor="lang">English</label> */}
                <select style={{width:'max-content'}} name="country" onChange={onchange} value={filters.country}>
                    <option value="au">Australia</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="cn" >China</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="in" defaultValue>India</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="pk">Pakistan</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russian Federation</option>
                    <option value="sg">Singapore</option>
                    <option value="es">Spain</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                    
                </select>
                {/* <input type="" name="iglink" id="" placeholder='Message' /> */}
            </div>

            <div className='ans'>
                {/* <label htmlFor="lang">English</label> */}
                <select style={{width:'max-content'}} name="category" onChange={onchange} value={filters.category}>
                    <option value="breaking-news" defaultValue>Top News</option>
                    <option value="world">World</option>
                    <option value="nation">Nation</option>
                    <option value="business" >Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                    
                    
                </select>
                {/* <input type="" name="iglink" id="" placeholder='Message' /> */}
            </div>

            {/* <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Filter</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"></a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Filters</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul> */}

        </div>
    )
}

export default Filter