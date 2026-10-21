import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectGallery({ images, name }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
      style={{ borderRadius: 8 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image}>
          <Box
            component="img"
            src={image}
            alt={`${name} photo ${index + 1}`}
            sx={{
              width: "100%",
              height: { xs: 220, md: 420 },
              objectFit: "cover",
              display: "block",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectGallery;
