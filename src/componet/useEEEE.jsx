import React, { useEffect, useState } from 'react'

function UseEEEE() {
    const [useE, setuseE] = useState('false');
    const [ok, setOk] = useState('')

    useEffect(() => {
        setuseE('true')
        console.log('Ok');
    }, [useE]);

    const setData = (e) => {
        setuseE(e.target.value)
    }
    const setDataQQ = (e) => {
        setOk(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={ setData } />
            <input type="text" onChange={ setDataQQ } />
            <h1>{ useE }</h1>
            <h1>{ ok }</h1>
        </div>
    )
}

export default UseEEEE