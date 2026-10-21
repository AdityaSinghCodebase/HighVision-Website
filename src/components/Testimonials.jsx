import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>
          What Our Customers Say
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mt: 1, mb: 5 }}>
          Families who trusted us with their dream plot
        </Typography>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: 48 }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
                <FormatQuoteIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="body1" sx={{ mt: 1, minHeight: 100 }}>
                  {item.text}
                </Typography>

                <Rating
                  value={item.rating}
                  readOnly
                  size="small"
                  sx={{ mt: 2 }}
                />

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}
                >
                  <Avatar>{item.name[0]}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.project}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default Testimonials;
