import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../constants/testimonials";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Client <span className="text-teal-600">Testimonials</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        What our clients say about working with us. Real feedback from real projects.
                    </p>
                </motion.div>

                {/* Swiper Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        loop={true}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full flex flex-col"
                                >
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-4">
                                        <FaQuoteLeft className="text-teal-500 text-2xl" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <p className="text-gray-700 dark:text-gray-300 text-center mb-6 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex justify-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm" />
                                        ))}
                                    </div>

                                    {/* Client Info */}
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-500">
                                            <img
                                                src={testimonial.photo}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-teal-600 dark:text-teal-400 font-medium">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {testimonial.company}
                                        </p>
                                        <div className="mt-2">
                                            <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-xs font-medium">
                                                {testimonial.project}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #14b8a6;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #14b8a6;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #14b8a6;
        }
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
