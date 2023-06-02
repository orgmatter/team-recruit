import React, { useState } from 'react';
import { CardNumberInput } from './CardNumberInput';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import Edit from "@material-ui/icons/Edit";
import { Apps, SportsVolleyball } from '@material-ui/icons';

export default function PaymentForm(props) {
    
    const { images } = props;

    const inputObj = {
        cardNumber: "",
        cvvNumber: "",
        expDateMonth: "",
        expDateYear: "",
        password: ""
    }

    const [inputVal, setInputValue] = useState(inputObj);

    const handleInputChange = (e) => {
        
        e.preventDefault();

        setInputValue(initialState => {
            return {
                ...initialState,
                [e.target.name]: e.target.value
            }
        })
    }
    
    return (
        <div className="payment-form-cover-flex">
            <div className="payment-form-cover-item">
                <div className="payment-form-content-flex">
                    <div className="payment-form-content-item">
                        <div className="header-cover-flex">
                            <div className="header-cover-item">
                                <div className="header-text-flex">
                                    <div className="header-text-item">
                                        <p className="app-name"><SportsVolleyball className="app-name-icon" /> &nbsp; AceCoin<span className="normal-text-span">Pay</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="header-cover-item"></div>
                            <div className="header-cover-item">
                                <div className="header-date-cover-flex">
                                    <div className="header-date-cover-item">
                                        <div className="date-cover-flex">
                                            <div className="date-cover-item">0</div>
                                            <div className="date-cover-item">1</div>
                                            <div className="date-cover-item">:</div>
                                            <div className="date-cover-item">1</div>
                                            <div className="date-cover-item">9</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-cover-flex">
                            <div className="body-cover-item">
                                <div className="form-cover-flex">
                                    <div className="form-cover-item">
                                        <form className="payment-form" id="paymnet_form" action="" method="">
                                            <div className="form-field-body-cover-flex">
                                                <div className="form-field-body-cover-item">
                                                    <div className="form-field-cover-flex">
                                                        <div className="form-field-cover-item">
                                                            <div className="text-fields-cover-flex">
                                                                <div className="text-fields-cover-item">
                                                                    <div className="text-field-label-cover-flex-long">
                                                                        <div className="text-field-label-cover-item">
                                                                            <p className="text-field-label"><strong>Card Number</strong></p>
                                                                            <p className="text-field-label">Enter the 16-digit number shown on the card</p>
                                                                        </div>
                                                                        <div className="text-field-label-cover-item"></div>
                                                                        <div className="text-field-label-cover-item">
                                                                            <p className="edit-btn-text"><span className="edit-icon"><Edit /></span> Edit</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-field-cover-flex-long">
                                                                        <div className="text-field-cover-item">
                                                                            <CardNumberInput 
                                                                                cardNumber={inputVal.cardNumber} 
                                                                                handleInputChange={handleInputChange}
                                                                                images={images}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-fields-cover-item">
                                                                    <div className="text-field-cover-flex-short">
                                                                        <div className="text-field-cover-item">
                                                                            <div className="text-field-label-cover">
                                                                                <p className="text-field-label"><strong>CVV Number</strong></p>
                                                                                <p className="text-field-label">Enter the 3 or 4 digit number on the card</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-field-cover-item"></div>
                                                                        <div className="text-field-cover-item">
                                                                            <div className="text-field-cover">
                                                                                <TextField
                                                                                    className="text-field-short"
                                                                                    type="text"
                                                                                    name="ccvNumber"
                                                                                    id="cvv_number"
                                                                                    value={inputVal.cvvNumber}
                                                                                    variant="outlined"
                                                                                    onChange={handleInputChange}
                                                                                    InputProps={{
                                                                                        endAdornment: (<InputAdornment position="end"><Apps className="apps-icon" /></InputAdornment>)
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-fields-cover-item">
                                                                    <div className="text-field-cover-flex-short">
                                                                        <div className="text-field-cover-item">
                                                                            <div className="text-field-label-cover">
                                                                                <p className="text-field-label"><strong>Expiry Date</strong></p>
                                                                                <p className="text-field-label">Enter the expiration date of the card</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-field-cover-item"></div>
                                                                        <div className="text-field-cover-item">
                                                                            <div className="date-field-cover-flex">
                                                                                <div className="date-field-cover-item">
                                                                                    <TextField
                                                                                        className="date-field"
                                                                                        type="text"
                                                                                        name="expDateMonth"
                                                                                        value={inputVal.expDateMonth}
                                                                                        variant="outlined"
                                                                                        onChange={handleInputChange}
                                                                                    />
                                                                                </div>
                                                                                <div className="date-field-cover-item">
                                                                                    <p className="date-field-divider">/</p>
                                                                                </div>
                                                                                <div className="date-field-cover-item">
                                                                                    <TextField
                                                                                        className="date-field"
                                                                                        type="text"
                                                                                        name="expDateYear"
                                                                                        value={inputVal.expDateYear}
                                                                                        variant="outlined"
                                                                                        onChange={handleInputChange}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-fields-cover-item">
                                                                    <div className="text-field-cover-flex-short">
                                                                        <div className="text-field-cover-item">
                                                                            <div className="text-field-label-cover">
                                                                                <p className="text-field-label"><strong>Password</strong></p>
                                                                                <p className="text-field-label">Enter your dynamic password</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-field-cover-item"></div>
                                                                        <div className="text-field-cover-item">
                                                                            <div className="text-field-cover">
                                                                                <TextField
                                                                                    className="text-field-short"
                                                                                    type="password"
                                                                                    name="password"
                                                                                    value={inputVal.password}
                                                                                    variant="outlined"
                                                                                    onChange={handleInputChange}
                                                                                    InputProps={{
                                                                                        endAdornment: (<InputAdornment position="end"><Apps className="apps-icon" /></InputAdornment>)
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-btn-cover-flex">
                                                                    <div className="form-btn-cover-item">
                                                                        <div className="btn-cover-flex">
                                                                            <div className="btn-cover-item">
                                                                                <Button
                                                                                    className="form-btn"
                                                                                    color="primary"
                                                                                    variant="contained"
                                                                                >Pay Now</Button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 