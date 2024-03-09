import {  useContext, useState } from 'react';
import './CurrencyDropDown.css';
import { AppContext } from '../context/AppContext';
const CurrencyDropDown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
      setSelectedCurrency(e.target.value);
      dispatch({
        type: 'CHG_CURRENCY',
        payload: e.target.value
    });
    };
  
    return (
        <div>
            <select id="currency" value={selectedCurrency} placeholder="Currency" onChange={handleCurrencyChange} className="currency-dropdown">
                <option value="">Select...</option>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};
export default CurrencyDropDown;