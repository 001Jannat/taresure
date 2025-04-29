import { useEffect } from 'react';
import '../styles/Card.css';

const Card = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.swip-item');
        let currentIndex = 0;
    
        const interval = setInterval(() => {
          // Hide current item
          items[currentIndex].style.transform = 'translateX(100%)';
          items[currentIndex].style.zIndex = '0';
          
          // Move to next item
          currentIndex = (currentIndex + 1) % items.length;
          
          // Show next item
          items[currentIndex].style.transform = 'none';
          items[currentIndex].style.zIndex = '9';
    
          // Update other items positions
          const nextIndex = (currentIndex + 1) % items.length;
          const nextNextIndex = (currentIndex + 2) % items.length;
          
          items[nextIndex].style.transform = 'translateX(40px) scale(0.9)';
          items[nextIndex].style.zIndex = '8';
          
          items[nextNextIndex].style.transform = 'translateX(80px) scale(0.8)';
          items[nextNextIndex].style.zIndex = '7';
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div data-v-cc0c96d0="" className="carousel">
    <div className="wrapper">
      <div className="inner">
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 9 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/GiffgaffApeClub/GiffgaffApeClub_7261.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/GiffgaffApeClub/GiffgaffApeClub_7261_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo_compre.png"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">51 USDT</span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "translateX(40px) scale(0.9)", zIndex: 8 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/WildGirl/WildGirl_4435.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/WildGirl/WildGirl_4435_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145514_WildGirl_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145514_WildGirl_logo_compre.jpg"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,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"
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">52 USDT</span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "translateX(80px) scale(0.8)", zIndex: 7 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/NoxiousAudience/Noxious%20Audience_1945.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/NoxiousAudience/Noxious Audience_1945_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145616_NoxiousAudience_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145616_NoxiousAudience_logo_compre.jpg"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,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"
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">
                  1307 USDT
                </span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 0 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/CoolAPE/CoolAPE_9032.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/CoolAPE/CoolAPE_9032_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145709_CoolAPE_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145709_CoolAPE_logo_compre.png"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">77 USDT</span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 0 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/YoungLady/YoungLady_5246.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/YoungLady/YoungLady_5246_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145424_YoungLady_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145424_YoungLady_logo_compre.jpg"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,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"
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">50 USDT</span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 0 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/PixelsPunk/PixelsPunk_3533.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/PixelsPunk/PixelsPunk_3533_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145650_PixelsPunk_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145650_PixelsPunk_logo_compre.png"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">
                  32667 USDT
                </span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 0 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/Stake/Stake_35559.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/Stake/Stake_35559_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20240425212105_20240402171501_%E4%B8%8B%E8%BC%89%20(2).avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20240425212105_20240402171501_下載 (2)_compre.png"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">51 USDT</span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 0 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/PunkCat/PunkCat_WINFRED_1874.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/PunkCat/PunkCat_WINFRED_1874_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145557_PunkCat_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145557_PunkCat_logo_compre.jpg"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,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"
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">
                  54.39 USDT
                </span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div
          draggable="true"
          className="swip-item"
          style={{ transform: "none", zIndex: 0 }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="https://prodimage-dan.treasurefun.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_464.avif"
            />
            <img
              alt="product"
              loading="lazy"
              className="img-wrap"
              src="https://prodimage-dan.treasurefun.xyz/TheCryptoLuckyGirl/TheCryptoLuckyGirl_464_compre.png"
            />
          </picture>
          <div className="userImgGroup">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
              />
              <img
                alt="user"
                loading="lazy"
                className="avatarImg"
                src="https://treasurefun.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
              />
            </picture>
          </div>
          <div className="priceAndTimeGroup">
            <div className="price">
              <p className="title-white-PR-14 text-algin-start">Current Bid</p>
              <div className="usdtImg margin-top-5">
                <img
                  src="data:image/png;base64,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"
                  alt="iconUsdt"
                  loading="lazy"
                  className="iconUsdt"
                />
                <span className="title-white-PR-14 font-weight-600">
                  52.15 USDT
                </span>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Card;
