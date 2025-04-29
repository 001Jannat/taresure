import '../styles/Discover.css';

const Discover = () => {
    const baseStyle = {
        display: 'block',
        unicodeBidi: 'isolate',
        WebkitTextSizeAdjust: '100%',
        fontSize: '14px',
        lineHeight: 1.5,
        color: '#515a6e',
        WebkitFontSmoothing: 'antialiased',
        fontFamily: 'PosteramaText-Regular',
        WebkitTapHighlightColor: 'transparent',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
    };

    return (
        <div data-v-cc0c96d0="" className="discover-nfts" style={baseStyle}>
            <h2 className="discover-title title-black-1927B-30">DISCOVER MORE NFTS</h2>
            <div className="ivu-tabs ivu-tabs-card" style={baseStyle}>
                <div className="ivu-tabs-bar" style={baseStyle}>
                    <div tabIndex={0} className="ivu-tabs-nav-container" style={baseStyle}>
                        <div className="ivu-tabs-nav-wrap ivu-tabs-nav-scrollable" style={baseStyle}>
                            <span className="ivu-tabs-nav-prev">
                                <i className="ivu-icon ivu-icon-ios-arrow-back" />
                            </span>
                            <div className="ivu-tabs-nav-scroll" style={baseStyle}>
                                <div className="ivu-tabs-nav" style={{...baseStyle, transform: "translateX(-144px)"}}>
                                    <div className="ivu-tabs-tab ivu-tabs-tab-active">stake</div>
                                    <div className="ivu-tabs-tab">polygonNFT</div>
                                    <div className="ivu-tabs-tab">Art</div>
                                    <div className="ivu-tabs-tab">Collectibles</div>
                                </div>
                            </div>
                            <span className="ivu-tabs-nav-next">
                                <i className="ivu-icon ivu-icon-ios-arrow-forward" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ivu-tabs-content" style={baseStyle}>
                    <div className="ivu-tabs-tabpane" style={baseStyle}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
