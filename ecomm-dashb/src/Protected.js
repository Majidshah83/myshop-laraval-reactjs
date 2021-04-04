import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
function Protected(props) {
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('./register');
        }

    }, [])
    let Cmp = props.Cmp;
    const history = useHistory();
    return (
        <div>
            < Cmp />
        </div>
    )
}
export default Protected;