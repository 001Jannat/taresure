import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

const My = () => {


  
    const navigate = useNavigate();


  return (
<>



<div id="dev-id">
  <div data-v-b02889ae="" className="pc-class">
    <div data-v-b02889ae="" className="ivu-layout">


       <Header />


      <div data-v-b02889ae="" className="content-wrap">
        <div
          data-v-21e18c34=""
          data-v-b02889ae=""
          className="userCenter"
          footernavitems="[object Object],[object Object],[object Object],[object Object],[object Object]"
        >
          <div data-v-21e18c34="" className="ivu-row UserAreaStraight-row">
            <div
              data-v-21e18c34=""
              className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-8 ivu-col-span-md-8 ivu-col-span-lg-8 ivu-col-span-xl-8"
              style={{ height: 125 }}
            >
              <div
                data-v-7971ee0e=""
                data-v-21e18c34=""
                className="userAreaStraight"
              >
                <div data-v-7971ee0e="" className="header-area">
                  {/**/}
                  <div data-v-7971ee0e="" className="info-area">
                    <img
                      data-v-7971ee0e=""
                      src="https://image.treasurenft.xyz/NewVer2212/img/img_avatar_01_defult.png"
                      alt="user-img"
                      loading="lazy"
                      className="user-img"
                    />
                    <div
                      data-v-7971ee0e=""
                      className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-start"
                      style={{ lineHeight: "1.7" }}
                    >
                      <div
                        data-v-7971ee0e=""
                        className="ivu-col ivu-col-span-24"
                      >
                        <div data-v-7971ee0e="" className="title-row">
                          <h2
                            data-v-7971ee0e=""
                            className="margin-right-10 title-black-PR-18"
                          >
                            **********
                          </h2>
                          {/**/}
                          <div data-v-60cb6f39="" className="">
                            <img
                              data-v-60cb6f39=""
                              src="https://image.treasurenft.xyz/img/icon-eye-on.svg"
                              alt="eye on"
                              width={24}
                              height={24}
                              decoding="sync"
                              className="eye-img"
                              style={{ display: "none" }}
                            />
                            <img
                              data-v-60cb6f39=""
                              src="https://image.treasurenft.xyz/img/icon-eye-off.svg"
                              alt="eye off"
                              width={24}
                              height={24}
                              decoding="sync"
                              className="eye-img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-7971ee0e=""
                        className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-24 ivu-col-span-xl-24"
                      >
                        <div
                          data-v-7971ee0e=""
                          className="setStart title-grey999-PR-12 "
                        >
                          <span data-v-7971ee0e="" className=" margin-right-5">
                            UID:
                          </span>
                          <span data-v-7971ee0e="">*********</span>
                          <img
                            data-v-7971ee0e=""
                            src="https://image.treasurenft.xyz/icon/icon_copy_02.png"
                            alt="UIDimg"
                            loading="lazy"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                      <div
                        data-v-7971ee0e=""
                        className="ivu-col ivu-col-span-xs-11 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-24 ivu-col-span-xl-24 info-block-out padding-right-5"
                      >
                        <div data-v-7971ee0e="" className="info-block">
                          <img
                            data-v-7971ee0e=""
                            src="https://image.treasurenft.xyz/NewVer2212/img/badges_lv0.png"
                            alt="imgLevel"
                            loading="lazy"
                            className="medal-img"
                          />
                          <span
                            data-v-7971ee0e=""
                            className="title-black-PR-12"
                            onClick={() => navigate('/Level')}
                          >
                            Level 0
                          </span>
                          <img
                            data-v-7971ee0e=""
                            src="https://image.treasurenft.xyz/btn/type%3Dbtn_arrow_03_up.png"
                            alt="right"
                            loading="lazy"
                            className="medal-img"
                          />
                        </div>
                      </div>
                      <div
                        data-v-7971ee0e=""
                        className="ivu-col ivu-col-span-xs-11 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-24 ivu-col-span-xl-24 info-block-out padding-left-5"
                      >
                        <div data-v-7971ee0e="" className="info-block">
                          <span
                            data-v-7971ee0e=""
                            className="title-black-PR-12"
                            onClick={() => navigate('/pointRecord')}
                          >
                            0 Points
                          </span>
                          <img
                            data-v-7971ee0e=""
                            src="https://image.treasurenft.xyz/btn/type%3Dbtn_arrow_03_up.png"
                            alt="right"
                            loading="lazy"
                            className="medal-img"
                          />
                        </div>
                      </div>
                      <div
                        data-v-7971ee0e=""
                        className="ivu-col ivu-col-span-24"
                      />
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                  <div data-v-c5baec9a="" data-v-7971ee0e="">
                    {/**/}
                  </div>
                </div>
              </div>
              <img
                data-v-21e18c34=""
                src="https://image.treasurenft.xyz/icon/icon_date_02.png"
                alt="date"
                loading="lazy"
                className="dailyMbIcon"
              />
            </div>
            <div
              data-v-21e18c34=""
              className="ivu-col info-wrap-Col ivu-col-span-xs-24 ivu-col-span-sm-16 ivu-col-span-md-16 ivu-col-span-lg-16 ivu-col-span-xl-16"
            >
              <div
                data-v-3705606e=""
                data-v-21e18c34=""
                className="UserAssetsInfo"
              >
                <div
                  data-v-3705606e=""
                  className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                >
                  {/**/}
                  {/**/}
                  <div
                    data-v-3705606e=""
                    className="UserAssetsInfo__mbItem margin-bottom-10 ivu-col"
                  >
                    <div
                      data-v-3705606e=""
                      className="d-flex align-items-center"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-22">
                        0
                      </span>
                    </div>
                    <h5 data-v-3705606e="" className="title-grey666-PR-14">
                      Wallet Balance
                    </h5>
                  </div>
                  <div
                    data-v-3705606e=""
                    className="UserAssetsInfo__mbItem ivu-col ivu-col-span-24"
                  >
                    <div
                      data-v-3705606e=""
                      className="d-flex align-items-center"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/img/icon_coin_tuft.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-22">
                        0
                      </span>
                    </div>
                    <h5 data-v-3705606e="" className="title-grey666-PR-14">
                      TUFTWallet Balance
                    </h5>
                  </div>
                  <div
                    data-v-3705606e=""
                    className="d-flex flex-direction-column UserAssetsInfo__btn-box ivu-col"
                  />
                </div>
                <div
                  data-v-3705606e=""
                  className="ivu-divider ivu-divider-horizontal ivu-divider-default"
                  style={{ margin: 12 }}
                >
                  {/**/}
                </div>
                {/**/}
                <div data-v-3705606e="" className="ivu-row">
                  <div
                    data-v-3705606e=""
                    className="UserAssetsInfo__Col ivu-col ivu-col-span-24"
                  >
                    <div data-v-3705606e="" className="w-30" />
                    <div data-v-3705606e="" className="w-35">
                      Daily income
                    </div>
                    <div data-v-3705606e="" className="w-35">
                      Total income
                    </div>
                  </div>
                  <div data-v-3705606e="" className="ivu-col ivu-col-span-24">
                    <div
                      data-v-3705606e=""
                      className="ivu-divider ivu-divider-horizontal ivu-divider-default"
                      style={{ margin: 12 }}
                    >
                      {/**/}
                    </div>
                  </div>
                  <div
                    data-v-3705606e=""
                    className="UserAssetsInfo__Col ivu-col ivu-col-span-24"
                  >
                    <div
                      data-v-3705606e=""
                      className="title-grey666-PR-12 width-30 margin-bottom-30"
                    >
                      Comprehensive
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="title-grey666-PR-12 width-30 margin-bottom-30"
                    >
                      Reserve
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="title-grey666-PR-12 width-30 margin-bottom-30"
                    >
                      Team
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="title-grey666-PR-12 width-30 margin-bottom-30"
                    >
                      Activity
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="title-grey666-PR-12 width-30 margin-bottom-30"
                    >
                      Bid
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/coin/usdt.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="title-grey666-PR-12 width-30 margin-bottom-30"
                    >
                      Stake
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/img/icon_coin_tuft.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                    <div
                      data-v-3705606e=""
                      className="w-35 d-flex align-items-center margin-bottom-30"
                    >
                      <img
                        data-v-3705606e=""
                        src="https://image.treasurenft.xyz/img/icon_coin_tuft.png"
                        loading="lazy"
                        alt="usdtImg"
                        className="UserAssetsInfo__icon"
                      />
                      <span data-v-3705606e="" className="title-black-PR-16">
                        0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-21e18c34="" className="info-wrap-group">
            <div
              data-v-21e18c34=""
              className="list-area-wrap ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
            >
              <div
                data-v-21e18c34=""
                className="list-area-wrap-Col ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-11"
              >
                <div data-v-21e18c34="" className="list-area">
                  <div data-v-21e18c34="" className="list-title-block">
                    <div data-v-21e18c34="" className="block-left">
                      <h2 data-v-21e18c34="" className="title-black-PR-16">
                        My Team
                      </h2>
                    </div>
                  </div>
                  <div
                    data-v-21e18c34=""
                    className="separate ivu-divider ivu-divider-horizontal ivu-divider-default"
                  >
                    {/**/}
                  </div>
                  <div
                    data-v-21e18c34=""
                    className="order-info ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between"
                  >
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        Community rewards
                      </p>
                    </div>
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        Valid Members
                      </p>
                    </div>
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        A enthusiast
                      </p>
                    </div>
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        B+C enthusiasts
                      </p>
                    </div>
                  </div>
                  {/**/}
                  <div
                    data-v-21e18c34=""
                    className="team-box ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between"
                  >
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="team-box-block" onClick={() => navigate('/Level/list')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_group_01.png"
                          alt="teamMember"
                          loading="lazy"
                          className="team-icon"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Community enthusiasts
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="team-box-block" onClick={() => navigate('/teamContribution')} >
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_trophy_01.png"
                          alt="teamContribution"
                          loading="lazy"
                          className="team-icon"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Community contributions
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="team-box-block" onClick={() => navigate('/teamOrder')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_order_01.png"
                          alt="teamOrder"
                          loading="lazy"
                          className="team-icon"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Community orders
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="team-box-block" onClick={() => navigate('/Referral')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_share_03.png"
                          alt="referral-code"
                          loading="lazy"
                          className="team-icon"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Referral
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-21e18c34=""
                className="list-area-wrap-Col ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-12"
              >
                <div data-v-21e18c34="" className="list-area">
                  <div data-v-21e18c34="" className="list-title-block">
                    <div data-v-21e18c34="" className="block-left">
                      <h2
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        My Orders
                      </h2>
                    </div>
                    <div data-v-21e18c34="" className="block-right color-sub">
                      <span data-v-21e18c34="" className="title-grey666-PR-12">
                        Check Orders
                      </span>
                      <img
                        data-v-21e18c34=""
                        src="https://image.treasurenft.xyz/Treasure2.5/icon/btn_arrow_right_01_nor.png"
                        loading="lazy"
                        alt="imgSee"
                      />
                    </div>
                  </div>
                  <div
                    data-v-21e18c34=""
                    className="separate ivu-divider ivu-divider-horizontal ivu-divider-default"
                  >
                    {/**/}
                  </div>
                  <div
                    data-v-21e18c34=""
                    className="order-info ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between"
                  >
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        Orders
                      </p>
                    </div>
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        Processing
                      </p>
                    </div>
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        Bought
                      </p>
                    </div>
                    <div data-v-21e18c34="" className="ivu-col ivu-col-span-6">
                      <h3
                        data-v-21e18c34=""
                        className="title-black-PR-16 font-weight-700"
                      >
                        0
                      </h3>
                      <p data-v-21e18c34="" className="title-grey666-PR-12">
                        Sold
                      </p>
                    </div>
                  </div>
                  {/**/}
                  <div
                    data-v-21e18c34=""
                    className="order-btn ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                  >
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="order-btn-block" onClick={() => navigate('/bidding')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_user_03.png"
                          loading="lazy"
                          alt="imgNft"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          My Bid
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="order-btn-block" onClick={() => navigate('/myEarnings')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_file_03.png"
                          loading="lazy"
                          alt="imgBal"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Details
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="order-btn-block" onClick={() => navigate('/Deposit')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_card03.png"
                          loading="lazy"
                          alt="imgRecharge"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Deposit
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="order-btn-block" onClick={() => navigate('/Withdraw')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_extraction_05.png"
                          loading="lazy"
                          alt="imgWithdraw"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Withdraw
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-21e18c34=""
                className="list-area-wrap-Col ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-11"
              >
                <div data-v-21e18c34="" className="list-area last-list">
                  <div data-v-21e18c34="" className="list-title-block">
                    <div data-v-21e18c34="" className="block-left">
                      <h2 data-v-21e18c34="" className="title-black-PR-16">
                        Common Functions
                      </h2>
                    </div>
                  </div>
                  <div
                    data-v-21e18c34=""
                    className="separate ivu-divider ivu-divider-horizontal ivu-divider-default"
                  >
                    {/**/}
                  </div>
                  <div
                    data-v-21e18c34=""
                    className="fun-btn ivu-row-flex ivu-row-flex-top ivu-row-flex-start"
                  >
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="fun-btn-block" onClick={() => navigate('/Tutorial')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_course_01.png"
                          loading="lazy"
                          alt="imgNovice"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Tutorials
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="fun-btn-block" onClick={() => navigate('/Setting')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_setting_03.png"
                          loading="lazy"
                          alt="imgSetting"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Settings
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="fun-btn-block" onClick={() => navigate('/Mint')}>
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_hammer_04.png"
                          loading="lazy"
                          alt="imgMint"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Mint
                        </p>
                      </div>
                    </div>
                    <div
                      data-v-21e18c34=""
                      className="ivu-col ivu-col-span-xs-6 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-6"
                    >
                      <div data-v-21e18c34="" className="fun-btn-block" >
                        <img
                          data-v-21e18c34=""
                          src="https://image.treasurenft.xyz/icon/icon_favorite.svg"
                          loading="lazy"
                          alt="imgMint"
                        />
                        <p data-v-21e18c34="" className="title-grey666-PR-12">
                          Collection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default My; 