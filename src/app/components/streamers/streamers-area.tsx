'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import shape from '@/assets/img/icons/shape.svg';
import Model from './Model';

import stream_1 from '@/assets/img/Vocalify Images/01 MichaelJackson.png';
import stream_2 from '@/assets/img/Vocalify Images/02 Beyonce-min.png';
import stream_3 from '@/assets/img/Vocalify Images/03 Oprah Winfrey-min.png';
import stream_4 from '@/assets/img/Vocalify Images/04 Madonna-min.png';
import stream_5 from '@/assets/img/Vocalify Images/05 Elvis Presley-min.png';
import stream_6 from '@/assets/img/Vocalify Images/13 MuhammadAli-min.png';
import stream_7 from '@/assets/img/Vocalify Images/06 PrincessDiana-min.png';
import stream_8 from '@/assets/img/Vocalify Images/07 MarilynMonreo-min.png';
import stream_9 from '@/assets/img/Vocalify Images/08 CharlieChaplin-min.png';
import stream_10 from '@/assets/img/Vocalify Images/09 MahatmaGandhi-min.png';
import stream_11 from '@/assets/img/Vocalify Images/10 NelsonMandela-min.png';
import stream_12 from '@/assets/img/Vocalify Images/107 LeonardoDaVinci-min.png';
import TextAnimation from '../common/text-animation';
import SvgIconCom from '../common/svg-icon-anim';

// slider data
const streamers_data: {
  id: number;
  img: StaticImageData;
  title: string;
}[] = [
  {
    id: 1,
    img: stream_1,
    title: 'Michael Jackson',
  },
  {
    id: 2,
    img: stream_2,
    title: 'Beyonce',
  },
  {
    id: 3,
    img: stream_3,
    title: 'Oprah Winfrey',
  },
  {
    id: 4,
    img: stream_4,
    title: 'Madonna',
  },
  {
    id: 5,
    img: stream_5,
    title: 'Elvis Presley',
  },
  {
    id: 6,
    img: stream_6,
    title: 'Muhammad Ali',
  },
  {
    id: 7,
    img: stream_7,
    title: 'Princess Diana',
  },
  {
    id: 8,
    img: stream_8,
    title: 'Marilyn Monreo',
  },
  {
    id: 9,
    img: stream_9,
    title: 'Charlie Chaplin',
  },
  {
    id: 10,
    img: stream_10,
    title: 'Mahatma Gandhi',
  },
  {
    id: 11,
    img: stream_11,
    title: 'Nelson Mandela',
  },
  {
    id: 12,
    img: stream_12,
    title: 'Leonardo DaVinci',
  },
];

// slider setting
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    '1500': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
};
const StreamersArea = () => {
  const [showModel, setShowModel] = useState({});
  return (
    <section
      id="topvoices"
      className="streamers__area section-pt-95 section-pb-120 mb-60"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="Our top voices" />
              <h3 className="title">top rated VOICES</h3>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            position: 'relative',
          }}
        >
          {Object.keys(showModel).length !== 0 && (
            <Model showModel={showModel} setShowModel={setShowModel} />
          )}
          {streamers_data.map((item, i) => (
            <div
              key={item.id}
              style={{ height: '280px', width: '150px', margin: '10px' }}
            >
              <div className="streamers__item">
                <div className="streamers__thumb">
                  {/* <Link href="/team-details">
                    <Image
                      src={item.img}
                      alt="img"
                      style={{ height: 'auto', width: '100%' }}
                    />
                  </Link> */}
                  <div onClick={() => setShowModel(item)}>
                    <Image
                      src={item.img}
                      alt="img"
                      style={{ height: 'auto', width: '100%' }}
                    />
                  </div>
                </div>
                <div className="streamers__content">
                  <h4 className="name">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="streamers__pagination">
          <div className="slider-button-prev streamers__pagination-arrow"><i className="fas fa-angle-left"></i></div>
          <div className="swiper-pagination streamers__pagination-dots"></div>
          <div className="slider-button-next streamers__pagination-arrow"><i className="fas fa-angle-right"></i></div>
        </div> */}
      </div>

      <Link href="/marketplace" className="tg-btn-3 tg-svg mx-auto">
        <SvgIconCom icon={shape} id="svg-1" />
        <span>View All</span>
      </Link>
    </section>
  );
};

export default StreamersArea;
