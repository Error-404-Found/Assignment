import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../components/Testimonial.module.css'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Testimonials() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10 col-12 mx-auto'>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="testimonials"
                    >
                        <SwiperSlide>
                            <div className={styles.testimonial_container}>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-12 d-block d-md-none d-lg-none'>
                                        <Image src='/images/adam.png' alt='Author' width={289} height={351} />
                                    </div>
                                    <div className='col-lg-8 col-md-8 col-12'>
                                        <div className={styles.testimonial}>
                                            <Image src='/images/Vector.png' width={57} height={45} alt='Quote' className={styles.quote} />
                                            <h3 className={styles.testimonial_title}>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%</h3>
                                            <div className={styles.authors_info}>
                                                <div className={styles.logo}>
                                                    <Image src='/images/double-logo.png' alt='' width={88} height={48} />
                                                </div>
                                                <Image src='/images/Line.png' alt='' width={1} height={48} />
                                                <span className={styles.author_container}>
                                                    <h4 className={styles.author}>Adam Weinger</h4>
                                                    <p className={styles.author_designation}>President,Double The Donation</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-12 d-none d-md-block d-lg-block'>
                                        <Image src='/images/adam.png' alt='Author' width={289} height={351} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.testimonial_container}>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-4 col-12 d-block d-md-none d-lg-none'>
                                        <Image src='/images/adam.png' alt='Author' width={289} height={351} />
                                    </div>
                                    <div className='col-lg-8 col-md-8 col-12'>
                                        <div className={styles.testimonial}>
                                            <Image src='/images/Vector.png' width={57} height={45} alt='Quote' className={styles.quote} />
                                            <h3 className={styles.testimonial_title}>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%</h3>
                                            <div className={styles.authors_info}>
                                                <div className={styles.logo}>
                                                    <Image src='/images/double-logo.png' alt='' width={88} height={48} />
                                                </div>
                                                <Image src='/images/Line.png' alt='' width={1} height={48} />
                                                <span className={styles.author_container}>
                                                    <h4 className={styles.author}>Adam Weinger</h4>
                                                    <p className={styles.author_designation}>President,Double The Donation</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-12 d-none d-md-block d-lg-block'>
                                        <Image src='/images/adam.png' alt='Author' width={289} height={351} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}