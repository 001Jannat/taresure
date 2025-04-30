import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavFooter from '../components/NavFooter';
import LazyImage from '../components/LazyImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Auction.css';

const Auction = () => {
  const carouselImages = [
    'https://treasurefun.xyz/userdata/img/20250414172705_A-343_170.avif',
    'https://treasurefun.xyz/userdata/img/20250414172719_B-343_170.avif'
  ];

  return (
    <div className="auction-container">
      <Header />
      <div className="auction-content">
        <div className="ivu-row-flex ivu-row-flex-top ivu-row-flex-space-between">
          {/* Carousel Section */}
          <div className="ivu-col margin-top-20 ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-16">
            <div className="carousel-container">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`carousel-bid-${index + 1}`}
                      className="carousel-img"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Auction Champion Section */}
          <div className="ivu-col ivu-col-span-xs-24 ivu-col-span-sm-24 ivu-col-span-md-8">
            <div className="ranking-list-wrapper">
              <div>
                <p className="font-weight-600 margin-bottom-20 title-black-PR-16">
                  Auction Champion
                </p>
                <div className="noData">
                  <LazyImage
                    src="https://image.treasurenft.xyz/PC/img/img_nodata.png"
                    alt="noData"
                  />
                  <p className="title-grey666-PR-18">No information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <NavFooter />
    </div>
  );
};

export default Auction; 