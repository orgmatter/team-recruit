import React, {} from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { cardNoValidation } from '../utils/formValidationUtil';

export const CardNumberInput = (props) => {

    const { cardNumber, handleInputChange, images } = props;

    const splitCardNumber = cardNoValidation(cardNumber);

    return (
       <TextField
            className="text-field-long"
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            InputProps={{
                startAdornment: <InputAdornment className="logo-input-adornment" position="start">
                    <div className="card-logo-flex">
                        <div className="card-logo-item">
                            <img className="card-logo-img" src={images.mastercardLogoOnly} />
                        </div>
                    </div>
                </InputAdornment>,
                endAdornment: <InputAdornment className="verified-input-adornment" position="end">
                    <div className="verified-logo-flex">
                        <div className="verified-logo-item">
                            <img className="verified-logo-img" src={images.verifiedLogo} />
                        </div>
                    </div>
                </InputAdornment>
            }}
            fullWidth
            variant="outlined"
        />
    )
}