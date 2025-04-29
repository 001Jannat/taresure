import '../styles/CreateSell.css';
import LazyImage from './LazyImage';

const CreateSell = () => {
    return (
        <div data-v-cc0c96d0="" className="create-sell-area">
        <div
          className="create-sell-row ivu-row-flex ivu-row-flex-space-between"
          style={{ marginLeft: "-8px", marginRight: "-8px" }}
        >
          <div
            className="img-wrap ivu-col ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-12 ivu-col-span-xl-12"
            style={{ paddingLeft: 8, paddingRight: 8 }}
          >
            <picture>
              <source
                type="image/avif"
                srcSet="https://image.treasurenft.xyz/NewVer2212/img/pc_img_login_photo_01.avif"
              />
              <LazyImage
                alt="img"
                loading="lazy"
                src="https://image.treasurenft.xyz/NewVer2212/img/pc_img_login_photo_01_compre.png"
              />
            </picture>
          </div>
          <div
            className="text-wrap ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-24 ivu-col-span-lg-10 ivu-col-span-xl-10"
            style={{ paddingLeft: 8, paddingRight: 8 }}
          >
            <h3 className="text-transform-uppercase title-black-1927B-30 line-height-1">
              RESERVE AND SELL YOUR NFT EASILY
            </h3>
            <p className="title-grey999-PR-18 font-weight-300">
              Earning income in Treasure Fun is simple: just RESERVE and then TRADE to
              EARN
            </p>
            <div className="ivu-row-flex ivu-row-flex-middle">
              <div className="ivu-col">
                <div className="sign-up-wrap">
                  <p className="title-white-PR-16 text-transform-uppercase">
                    Get TUFT
                  </p>
                </div>
              </div>
              <div className="ivu-col">
                <div className="sign-up-wrap">
                  <p className="title-white-PR-16 text-transform-uppercase">
                    Auction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
      </div>
      
    )
}

export default CreateSell;
