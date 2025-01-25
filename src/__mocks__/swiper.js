module.exports = {
    Swiper: ({ children }) => <div>{children}</div>,  // Simula o componente Swiper
    SwiperSlide: ({ children }) => <div>{children}</div>,  // Simula o componente SwiperSlide
    // Mocks para as importações de CSS
    'swiper/css': {},
    'swiper/css/navigation': {},
    'swiper/css/pagination': {},
  };