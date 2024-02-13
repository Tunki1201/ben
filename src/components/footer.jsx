import React from "react";

const FooterPage = () => {

    return (
        <>
            <footer className="py-[15px] relative" style={{ color: 'rgb(50 131 54 )' }}>
                <section class="gradient-pp vh-10 z-[2]">

                    <div class="w-100 bottom-0">

                        <svg className="waves-new" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto" style={{ width: '130%', height: '240px', margin: '-125px -4px', transform: 'rotateY(-175deg)' }}>
                            <defs>
                                <path id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v1h-22z" />
                            </defs>
                            <g class="moving-waves">
                                <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgb(50 131 54 )" />
                            </g>

                        </svg>

                    </div>

                </section>
                <div className="flex justify-center items-center z-[50]">
                    <div className="w-[40%] max-lg:w-[80%]">
                        <p className="text-start text-white text-[20px]" style={{ fontFamily: 'Mansalva' }}>© 2024 $BEN10 All Rights Reserved</p>
                        <p className=" text-start text-white"> Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                    </div>
                    <div className="w-[15%] text-center max-lg:hidden" style={{ color: 'white' }}>
                        <img src="/images/images.png" style={{ width: '150px', height: '60px', margin: 'auto' }} />
                        <p>Contact@sponge.vip</p>
                    </div>
                    <div className="w-[15%] text-center max-lg:hidden" style={{ color: 'white' }}>
                        <p>Sponge V2 Ltd.</p>
                        <p>BVI: 2124828</p>
                    </div>
                    <div className="w-[15%] text-center max-lg:hidden" style={{ color: 'white' }}>
                        <p>40A Sponge Street</p>
                        <p>Spongeland, 9876</p>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default FooterPage
