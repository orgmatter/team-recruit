import React, {} from "react";
import { Print, Apple } from "@material-ui/icons";

export default function CardDetails(props) {

    const { images, cardPropsUtil } = props;

    const card = cardPropsUtil.cardPaymentDetails.find((paymentDetails) => paymentDetails.holder.name === "Jonathan Michael");
    
    return (
        <div className="card-details-container-flex">
            <div className="card-details-container-item">
                <div className="card-details-cover-flex">
                    <div className="card-details-cover-item">
                        <div className="card-cover-flex">
                            <div className="card-cover-item">
                                <div className="card-hook"></div>
                                <div className="card-section-cover-flex">
                                    <div className="card-section-cover-item">
                                        <div className="card-section">
                                            <div className="pin-wifi-section-flex">
                                                <div className="pin-wifi-section-item">
                                                    <div className="image-cover-flex">
                                                        <div className="image-cover-item">
                                                            <img className="chip-img" src={images.cardChipLogo} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pin-wifi-section-item">
                                                    <div className="image-cover-flex">
                                                        <div className="image-cover-item">
                                                            <img className="wifi-img" src={images.wifiLogo} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-section"></div>
                                        <div className="card-section">
                                            <div className="name-number-section">
                                                <p className="name-text">{card.holder.name}</p>
                                                <div className="number-text-flex">
                                                    <div className="number-text-item">
                                                        <div className="psw-circle-flex">
                                                            <div className="psw-circle-item">
                                                                <div className="circle-flex">
                                                                    <div className="circle-item"></div>
                                                                    <div className="circle-item"></div>
                                                                    <div className="circle-item"></div>
                                                                    <div className="circle-item"></div>
                                                                </div>
                                                            </div>
                                                            <div className="psw-circle-item">{card.holder.cardProvider.cardSuffixNo}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="date-logo-section-flex">
                                                <div className="date-logo-section-item">{card.holder.cardProvider.cardExpDate}</div>
                                                <div className="date-logo-section-item">
                                                    <div className="image-cover-flex">
                                                        <div className="image-cover-item">
                                                            <img className="card-logo-img" src={images.mastercardLogo} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details-cover-flex">
                            <div className="details-cover-item">
                                <div className="details-inner-cover-flex">
                                    <div className="details-inner-cover-item">
                                        <div className="details-section-cover-flex">
                                            <div className="details-section-cover-item">Company</div>
                                            <div className="details-section-cover-item"><Apple /> Apple</div>
                                        </div>
                                        <div className="details-section-cover-flex">
                                            <div className="details-section-cover-item">Order Number</div>
                                            <div className="details-section-cover-item">1266201</div>
                                        </div>
                                        <div className="details-section-cover-flex">
                                            <div className="details-section-cover-item">Product</div>
                                            <div className="details-section-cover-item">MacBook Air</div>
                                        </div>
                                        <div className="details-section-cover-flex">
                                            <div className="details-section-cover-item">VAT(20%)</div>
                                            <div className="details-section-cover-item">$100.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-details-divider-cover">
                                    <div className="divider-dots"></div>
                                    <div className="divider-hook1"></div>
                                    <div className="divider-hook2"></div>
                                </div>
                                <div className="card-details-footer-flex">
                                    <div className="card-details-footer-item">
                                        <div className="card-details-inner-footer-flex">
                                            <div className="card-details-inner-footer-item">
                                                <p className="para1">You have to Pay</p>
                                                <p className="para2">549.<small className="decimal-small">99</small> <small className="currency-small">USD</small></p>
                                            </div>
                                            <div className="card-details-inner-footer-item">
                                                <p className="print-icon-p"><Print className="print-icon" /></p>
                                            </div>
                                        </div>
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