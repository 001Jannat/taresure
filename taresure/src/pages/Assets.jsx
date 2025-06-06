import React from 'react';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

const Assets = () => {
  return (
 <>
 
<div id="dev-id">
  <div data-v-b02889ae="" className="pc-class">
    <div data-v-b02889ae="" className="ivu-layout">



       <Header />
      <div data-v-b02889ae="" className="content-wrap">
        <div
          data-v-3aa04343=""
          data-v-b02889ae=""
          className="walletnew"
          footernavitems="[object Object],[object Object],[object Object],[object Object],[object Object]"
        >
          {/**/}
          <div data-v-3aa04343="" className="headerImg">
            <i
              data-v-3aa04343=""
              className="arrowLeft ivu-icon ivu-icon-ios-arrow-back"
              style={{ fontSize: 24 }}
            />
            <img
              data-v-3aa04343=""
              src="https://image.treasurenft.xyz/img/img_walletHeader.png"
              alt="header"
              loading="lazy"
            />
          </div>
          <div data-v-3aa04343="" className="ivu-row main">
            <div
              data-v-3aa04343=""
              className="left-side ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12"
            >
              <div data-v-3aa04343="" className="left-inside">
                <div
                  data-v-3aa04343=""
                  className="assetsGroup-Row ivu-row-flex ivu-row-flex-bottom"
                >
                  <div data-v-3aa04343="" className="assetsGroup-title">
                    <h3
                      data-v-3aa04343=""
                      className="title-black-PR-14 font-weight-700"
                    >
                      Assets(USDT)
                    </h3>
                  </div>
                  <div data-v-3aa04343="" className="ivu-col ivu-col-span-24">
                    <div data-v-3aa04343="" className="assetsGroup-Row-usdt">
                      {/**/}
                      <span data-v-3aa04343="" className="title-black-PR-26">
                        0
                      </span>
                    </div>
                  </div>
                  {/**/}
                  <div
                    data-v-3aa04343=""
                    className="ivu-col ivu-col-span-7 assetsGroup-Col"
                  >
                    <p
                      data-v-3aa04343=""
                      className="title-grey999-PR-12 font-weight-700"
                    >
                      Total Earnings
                    </p>
                    <div data-v-3aa04343="" className="assetsGroup-outerFrame">
                      <img
                        data-v-3aa04343=""
                        src="data:image/png;base64,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"
                        alt="coin"
                        loading="lazy"
                        className="assetsGroup-icon"
                      />
                      <span
                        data-v-3aa04343=""
                        className="title-black-PR-14 font-weight-700"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  <div
                    data-v-3aa04343=""
                    className="ivu-col ivu-col-span-7 assetsGroup-Col"
                  >
                    <p
                      data-v-3aa04343=""
                      className="title-grey999-PR-12 font-weight-700"
                    >
                      Withdrawn
                    </p>
                    <div data-v-3aa04343="" className="assetsGroup-outerFrame">
                      <img
                        data-v-3aa04343=""
                        src="data:image/png;base64,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"
                        alt="coin"
                        loading="lazy"
                        className="assetsGroup-icon"
                      />
                      <span
                        data-v-3aa04343=""
                        className="title-black-PR-14 font-weight-700"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  <div
                    data-v-3aa04343=""
                    className="ivu-col ivu-col-span-7 assetsGroup-Col"
                  >
                    <p
                      data-v-3aa04343=""
                      className="title-grey999-PR-12 font-weight-700"
                    >
                      Undrawn
                    </p>
                    <div data-v-3aa04343="" className="assetsGroup-outerFrame">
                      <img
                        data-v-3aa04343=""
                        src="data:image/png;base64,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"
                        alt="coin"
                        loading="lazy"
                        className="assetsGroup-icon"
                      />
                      <span
                        data-v-3aa04343=""
                        className="title-black-PR-14 font-weight-700"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  {/**/}
                </div>
                <div
                  data-v-3aa04343=""
                  className="assetsGroup-Row ivu-row-flex ivu-row-flex-bottom"
                >
                  <div data-v-3aa04343="" className="assetsGroup-title">
                    <h3
                      data-v-3aa04343=""
                      className="title-black-PR-14 font-weight-700"
                    >
                      Assets(TUFT)
                    </h3>
                  </div>
                  <div data-v-3aa04343="" className="ivu-col ivu-col-span-24">
                    <div data-v-3aa04343="" className="assetsGroup-Row-usdt">
                      {/**/}
                      <span data-v-3aa04343="" className="title-black-PR-26">
                        0
                      </span>
                    </div>
                  </div>
                  {/**/}
                  <div
                    data-v-3aa04343=""
                    className="ivu-col ivu-col-span-7 assetsGroup-Col"
                  >
                    <p
                      data-v-3aa04343=""
                      className="title-grey999-PR-12 font-weight-700"
                    >
                      Total Earnings
                    </p>
                    <div data-v-3aa04343="" className="assetsGroup-outerFrame">
                      <img
                        data-v-3aa04343=""
                        src="https://image.treasurenft.xyz/img/icon_coin_tuft.png"
                        alt="coin"
                        loading="lazy"
                        className="assetsGroup-icon"
                      />
                      <span
                        data-v-3aa04343=""
                        className="title-black-PR-14 font-weight-700"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  <div
                    data-v-3aa04343=""
                    className="ivu-col ivu-col-span-7 assetsGroup-Col"
                  >
                    <p
                      data-v-3aa04343=""
                      className="title-grey999-PR-12 font-weight-700"
                    >
                      Withdrawn
                    </p>
                    <div data-v-3aa04343="" className="assetsGroup-outerFrame">
                      <img
                        data-v-3aa04343=""
                        src="https://image.treasurenft.xyz/img/icon_coin_tuft.png"
                        alt="coin"
                        loading="lazy"
                        className="assetsGroup-icon"
                      />
                      <span
                        data-v-3aa04343=""
                        className="title-black-PR-14 font-weight-700"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  <div
                    data-v-3aa04343=""
                    className="ivu-col ivu-col-span-7 assetsGroup-Col"
                  >
                    <p
                      data-v-3aa04343=""
                      className="title-grey999-PR-12 font-weight-700"
                    >
                      Undrawn
                    </p>
                    <div data-v-3aa04343="" className="assetsGroup-outerFrame">
                      <img
                        data-v-3aa04343=""
                        src="https://image.treasurenft.xyz/img/icon_coin_tuft.png"
                        alt="coin"
                        loading="lazy"
                        className="assetsGroup-icon"
                      />
                      <span
                        data-v-3aa04343=""
                        className="title-black-PR-14 font-weight-700"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  {/**/}
                </div>
                <div data-v-3aa04343="" className="detail-area">
                  <div data-v-3aa04343="" className="detail-item">
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-middle"
                      style={{ marginLeft: "-5px", marginRight: "-5px" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col ivu-col-span-14"
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                      >
                        <div
                          data-v-3aa04343=""
                          className="ivu-select ivu-select-single ivu-select-default"
                        >
                          <div tabIndex={0} className="ivu-select-selection">
                            <input type="hidden" defaultValue="DOG" />{" "}
                            <div className="">
                              {/**/} {/**/}{" "}
                              <span className="ivu-select-selected-value">
                                {" "}
                                Node 2{" "}
                              </span>{" "}
                              {/**/} {/**/}{" "}
                              <i className="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow" />
                            </div>
                          </div>{" "}
                          {/**/}
                        </div>
                      </div>
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                      >
                        <div data-v-3aa04343="" className="ivu-tooltip">
                          <div className="ivu-tooltip-rel">
                            <img
                              data-v-3aa04343=""
                              src="https://image.treasurenft.xyz/img/icon_question_mark.svg"
                              alt="question mark"
                              width={30}
                              height={28}
                              aria-label="Description of the overall image"
                              offset={10}
                              className="cursor-pointer"
                              style={{ display: "block" }}
                            />
                          </div>{" "}
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-3aa04343="" className="detail-item">
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-middle margin-bottom-15"
                      style={{ marginLeft: "-4px", marginRight: "-4px" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ paddingLeft: 4, paddingRight: 4 }}
                      >
                        <div data-v-3aa04343="" className="title-grey333-PR-12">
                          USDT Deposit Address(BEP-20)
                        </div>
                      </div>
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ paddingLeft: 4, paddingRight: 4 }}
                      >
                        <div
                          data-v-3aa04343=""
                          style={{ height: 24, width: 24 }}
                        >
                          <img
                            data-v-3aa04343=""
                            src="https://image.treasurenft.xyz/icon/icon_eye_open.svg"
                            alt="icon closed"
                            width={24}
                            height={24}
                            decoding="async"
                            className="eye-icon"
                            style={{ display: "none" }}
                          />
                          <img
                            data-v-3aa04343=""
                            src="https://image.treasurenft.xyz/icon/icon_eye_closed.svg"
                            alt="icon closed"
                            width={24}
                            height={24}
                            decoding="async"
                            className="eye-icon"
                          />
                        </div>
                      </div>
                      {/**/}
                    </div>
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-top"
                      style={{ flexWrap: "nowrap" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-3aa04343=""
                          className="font-weight-500 detail-item-address title-grey666-PR-12 "
                          style={{ wordBreak: "break-all" }}
                        >
                          {" "}
                          ************************************{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-3aa04343="" className="detail-item">
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-middle margin-bottom-15"
                      style={{ marginLeft: "-4px", marginRight: "-4px" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ paddingLeft: 4, paddingRight: 4 }}
                      >
                        <div data-v-3aa04343="" className="title-grey333-PR-12">
                          USDT Deposit Address(TRC-20)
                        </div>
                      </div>
                      {/**/}
                    </div>
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-top"
                      style={{ flexWrap: "nowrap" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-3aa04343=""
                          className="font-weight-500 detail-item-address title-grey666-PR-12 "
                          style={{ wordBreak: "break-all" }}
                        >
                          {" "}
                          ************************************{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-3aa04343="" className="detail-item">
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-middle margin-bottom-15"
                      style={{ marginLeft: "-4px", marginRight: "-4px" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ paddingLeft: 4, paddingRight: 4 }}
                      >
                        <div data-v-3aa04343="" className="title-grey333-PR-12">
                          USDT Deposit Address(Solana)
                        </div>
                      </div>
                      {/**/}
                    </div>
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-top"
                      style={{ flexWrap: "nowrap" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-3aa04343=""
                          className="font-weight-500 detail-item-address title-grey666-PR-12 "
                          style={{ wordBreak: "break-all" }}
                        >
                          {" "}
                          ************************************{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-3aa04343="" className="detail-item">
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-middle margin-bottom-15"
                      style={{ marginLeft: "-4px", marginRight: "-4px" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ paddingLeft: 4, paddingRight: 4 }}
                      >
                        <div data-v-3aa04343="" className="title-grey333-PR-12">
                          TUFTDeposit Address(BEP-20)
                        </div>
                      </div>
                      {/**/}
                    </div>
                    <div
                      data-v-3aa04343=""
                      className="ivu-row-flex ivu-row-flex-top"
                      style={{ flexWrap: "nowrap" }}
                    >
                      <div
                        data-v-3aa04343=""
                        className="ivu-col"
                        style={{ flex: "1 1 0px" }}
                      >
                        <div
                          data-v-3aa04343=""
                          className="font-weight-500 detail-item-address title-grey666-PR-12 "
                          style={{ wordBreak: "break-all" }}
                        >
                          {" "}
                          ************************************{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-3aa04343="" className="ivu-row buttonGroup-Row">
                  <div data-v-3aa04343="" className="ivu-col ivu-col-span-8">
                    <div data-v-3aa04343="" className="buttonGroup-special">
                      <div
                        data-v-3aa04343=""
                        className="buttonGroup-special-innerFrame"
                      >
                        <img
                          data-v-3aa04343=""
                          src="https://image.treasurenft.xyz/icon/icon_card04.png"
                          alt="show"
                          loading="lazy"
                          className="buttonGroup-img"
                        />
                        <img
                          data-v-3aa04343=""
                          src="https://image.treasurenft.xyz/icon/icon_card04.png"
                          alt="show"
                          loading="lazy"
                          className="buttonGroup-img"
                          style={{ display: "none" }}
                        />
                        <p
                          data-v-3aa04343=""
                          className="title-grey333-PR-12 font-weight-700 margin-top-5"
                        >
                          Deposit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-v-3aa04343="" className="ivu-col ivu-col-span-8">
                    <div data-v-3aa04343="" className="buttonGroup-special">
                      <div
                        data-v-3aa04343=""
                        className="buttonGroup-special-innerFrame"
                      >
                        <img
                          data-v-3aa04343=""
                          src="https://image.treasurenft.xyz/icon/icon_extraction_06.png"
                          alt="icon"
                          loading="lazy"
                          className="buttonGroup-img"
                        />
                        <img
                          data-v-3aa04343=""
                          src="https://image.treasurenft.xyz/icon/icon_extraction_06.png"
                          alt="icon"
                          loading="lazy"
                          className="buttonGroup-img"
                          style={{ display: "none" }}
                        />
                        <p
                          data-v-3aa04343=""
                          className="title-grey333-PR-12 font-weight-700 margin-top-5"
                        >
                          Withdraw
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-v-3aa04343="" className="ivu-col ivu-col-span-8">
                    <div data-v-3aa04343="" className="buttonGroup-special">
                      <div
                        data-v-3aa04343=""
                        className="buttonGroup-special-innerFrame"
                      >
                        <img
                          data-v-3aa04343=""
                          src="https://image.treasurenft.xyz/icon/icon_setting_04.png"
                          alt="icon"
                          loading="lazy"
                          className="buttonGroup-img"
                        />
                        <img
                          data-v-3aa04343=""
                          src="https://image.treasurenft.xyz/icon/icon_setting_04.png"
                          alt="icon"
                          loading="lazy"
                          className="buttonGroup-img"
                          style={{ display: "none" }}
                        />
                        <p
                          data-v-3aa04343=""
                          className="title-grey333-PR-12 font-weight-700 margin-top-5"
                        >
                          Settings
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  data-v-3aa04343=""
                  type="button"
                  className="margin-top-20 ivu-btn ivu-btn-primary ivu-btn-long"
                  fdprocessedid="y8y32k"
                >
                  {/**/} {/**/} <span>Deposit in fiat currency</span>
                </button>
                {/**/}
                <div data-v-3aa04343="" className="history-div">
                  <p
                    data-v-3aa04343=""
                    className="title-black-PR-16 font-weight-700"
                  >
                    History
                  </p>
                  <span data-v-3aa04343="" className="title-grey666-PR-14">
                    All ＞
                  </span>
                </div>
                <div data-v-3aa04343="" className="history-area" />
              </div>
            </div>
            <div
              data-v-3aa04343=""
              className="right-side ivu-col ivu-col-span-xs-0 ivu-col-span-sm-0 ivu-col-span-md-12"
            >
              <img
                data-v-3aa04343=""
                src="https://image.treasurenft.xyz/PC/img/pc_singImg_01.png"
                alt="img"
                loading="lazy"
                className="bg-img"
              />
            </div>
          </div>
          {/**/}
          {/**/}
          {/**/}
        </div>
        <img
          data-v-b02889ae=""
          src="https://image.treasurenft.xyz/btn/btn_help_01.png"
          alt="helpIcon"
          loading="lazy"
          className="helpIconStyle"
          style={{}}
        />
      </div>


<NavFooter/>

    </div>
    {/**/}
    <div data-v-d27ce888="" data-v-b02889ae="">
      {/**/}
    </div>
    {/**/}
    {/**/}
    {/**/}
    {/**/}
    {/**/}
    <div data-v-d9d51de4="" data-v-b02889ae="">
      {/**/}
      {/**/}
    </div>
    {/**/}
    {/**/}
    {/**/}
  </div>
</div>
 
 
 
 </>
  );
};

export default Assets; 