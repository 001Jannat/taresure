import React, { useState } from 'react';
import LazyImage from './LazyImage';
import '../styles/TUFTModal.css';

const TUFTModal = ({ isVisible, onClose }) => {
  const [amount, setAmount] = useState('');

  if (!isVisible) return null;
  console.log(isVisible);

  const handleClose = () => {
    console.log('Closing modal');
    onClose && onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'ivu-modal-wrap') {
      handleClose();
    }
  };

  return (
    <div className="ivu-modal-wrap" style={{ zIndex: 1008 }} onClick={handleOverlayClick}>
      <div className="ivu-modal" style={{ width: '333px' }}>
        <div className="ivu-modal-content">
          <div className="ivu-modal-header">
            <div
              data-v-32aa64be=""
              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
            >
              <div data-v-32aa64be="" className="ivu-col">
                <h3 data-v-32aa64be="" className="font-weight-700 title-black-PR-28">
                  {" "}
                  Buy TUFT{" "}
                </h3>
              </div>
              <div data-v-32aa64be="" className="ivu-col">
                <div
                  data-v-32aa64be=""
                  className="ivu-row-flex ivu-row-flex-middle"
                  style={{ marginLeft: "-5px", marginRight: "-5px" }}
                >
                  <div
                    data-v-32aa64be=""
                    className="ivu-col"
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                  >
                    <img
                      data-v-32aa64be=""
                      src="https://image.treasurenft.xyz/icon/icon_sort_03.png"
                      width={24}
                      height={24}
                      alt="icon sort"
                      decoding="async"
                      className="icon cursor-pointer"
                    />
                  </div>
                  <div
                    data-v-32aa64be=""
                    className="ivu-col"
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                  >
                    <img
                      data-v-32aa64be=""
                      src="https://image.treasurenft.xyz/PC/img/icon-close_01.svg"
                      width={24}
                      height={24}
                      alt="close"
                      decoding="async"
                      className="icon cursor-pointer"
                      onClick={handleClose}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ivu-modal-body">
            <form autoComplete="off" className="ivu-form ivu-form-label-right">
              <div className="ivu-form-item">
                <div className="ivu-form-item-content">

                  <div
                    data-v-32aa64be=""
                    className="purchase-qty-input ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text"
                  >
                    {/**/}{" "}
                    <span className="ivu-input-suffix">
                      <div
                        data-v-32aa64be=""
                        className="ivu-row-flex ivu-row-flex-middle"
                        style={{ marginLeft: "-5px", marginRight: "-5px", flexWrap: "nowrap" }}
                      >
                        <div
                          data-v-32aa64be=""
                          className="ivu-col"
                          style={{ paddingLeft: 5, paddingRight: 5 }}
                        >
                          <span data-v-32aa64be="" className="currency">
                            USDT
                          </span>
                        </div>
                        <div
                          data-v-32aa64be=""
                          className="ivu-col"
                          style={{ paddingLeft: 5, paddingRight: 5 }}
                        >
                          <div data-v-32aa64be="" className="purchase-qty-input__btn">
                            Max
                          </div>
                        </div>
                      </div>
                    </span>{" "}
                    <i className="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate" />{" "}<i className="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate" />
                    <input
                      autoComplete="off"
                      spellCheck="false"
                      type="text"
                      placeholder="Please enter Amount"
                      className="ivu-input ivu-input-default ivu-input-with-suffix"
                    />{" "}
                    {/**/}
                  </div>




                </div>
              </div>
            </form>
            <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-5">
              <div className="ivu-col">
                <div className="ivu-row-flex ivu-row-flex-middle" style={{ marginLeft: '-2.5px', marginRight: '-2.5px' }}>
                  <div className="ivu-col" style={{ paddingLeft: '2.5px', paddingRight: '2.5px', paddingTop: '10px' }}>
                    <p className="title-grey666-PR-14">Balance:</p>
                  </div>
                  <div className="ivu-col" style={{ paddingLeft: '2.5px', paddingRight: '2.5px' }}>
                    <p className="font-weight-700 title-grey666-PR-14">0</p>
                  </div>
                </div>
              </div>
              <div className="ivu-col">
                <a href="#/uc/walletRecharge" className="">
                  <p className="title-green-PR-14">Deposit</p>
                </a>
              </div>
            </div>
            <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-5">
              <div className="ivu-col">
                <p className="title-grey666-PR-14">Minimum quantity</p>
              </div>
              <div className="ivu-col">
                <p className="font-weight-700 title-black-PR-14">50 USDT</p>
              </div>
            </div>
            <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-5">
              <div className="ivu-col">
                <p className="title-grey666-PR-14">Price</p>
              </div>
              <div className="ivu-col">
                <p className="font-weight-700 title-black-PR-14">1 TUFT = 0.004 USDT</p>
              </div>
            </div>
            <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-5">
              <div className="ivu-col">
                <p className="title-grey666-PR-14">Swap fee</p>
              </div>
              <div className="ivu-col">
                <p className="font-weight-700 title-black-PR-14">0</p>
              </div>
            </div>
            <p className="title-black-PR-18 font-weight-700 margin-bottom-5">TUFT amount received</p>
            <div className="purchase-qty-input margin-bottom-15">
              <div className="purchase-qty-input__display">
                <div className="ivu-col">
                  <p className="title-grey666-PR-14">0</p>
                </div>
                <div className="ivu-col">
                  <p className="title-black-PR-14">TUFT</p>
                </div>
              </div>
            </div>

            <div data-v-32aa64be="" className="rules">
              <p
                data-v-32aa64be=""
                className="font-weight-700 margin-bottom-10 title-grey666-PR-14"
              >
                {" "}
                Rules explanation:{" "}
              </p>
              <ul data-v-32aa64be="" style={{ listStyleType: "none" }}>
                <li data-v-32aa64be="" className="title-grey666-PR-14">
                  {" "}
                  Minimum per purchase: 50 USDT{" "}
                </li>
                <li data-v-32aa64be="" className="title-grey666-PR-14">
                  {" "}
                  Multiple purchases allowed{" "}
                </li>
                <li data-v-32aa64be="" className="title-grey666-PR-14">
                  {" "}
                  Tokens will show on the Assets page after purchase{" "}
                </li>
              </ul>
            </div>

          </div>
          <div className="ivu-modal-footer">
            <div className="ivu-row-flex ivu-row-flex-center">
              <button type="button" className="ivu-btn ivu-btn-primary font-weight-800">
                <span>Sell NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TUFTModal; 