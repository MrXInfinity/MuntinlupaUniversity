import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccImg from "../assets/AccountancyImg1.png";
import FashionImg from "../assets/FashionDesignImg1.png";
import ITImg from "../assets/InformationTechImg1.png";
import FormPayment from "./FormPayment";

const courseSelection = [
  {
    image: AccImg,
    title: "BS in Accountancy",
    description:
      "Home to many CPAs and Topnotchers. Mun-U offers a high-quality CPA board preparation course handled by professors that are Reliable, Equipped, Stable, and Adept.",
  },
  {
    image: FashionImg,
    title: "BS in Fashion Design",
    description:
      "This course introduces students to a variety of aspects in the fashion industry. Practical techniques are combined with each individual's creativity to learn how to work with a number of different materials.",
  },
  {
    image: ITImg,
    title: "BS in Information Technology",
    description:
      "As a pioneer in computer education in the Philippines, Mun-U is considered as one of the reliable producers of graduates who are highly competent in different technologies and applications needed in the industry.",
  },
];

const CourseList: React.FC<{ user: string }> = ({ user }) => {
  const [formDetails, setFormDetails] = useState({
    userName: "",
    courseTitle: "",
    open: false,
  });
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dialogClose = () => {
    setFormDetails({
      userName: "",
      courseTitle: "",
      open: false,
    });
  };

  return (
    <>
      <Container sx={{ mt: 2, px: 0 }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Poppins" }}
        >
          Welcome
        </Typography>
        <Typography sx={{ fontFamily: "Poppins", fontSize: 20 }}>
          {user}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h4"
            sx={{ mb: 1 }}
          >
            Courses
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {courseSelection.map(({ image, title, description }, index) => (
              <Card
                key={index}
                sx={{ backgroundColor: "#13325B", color: "white" }}
              >
                <CardActionArea
                  onClick={() =>
                    setFormDetails({
                      userName: user,
                      courseTitle: title,
                      open: true,
                    })
                  }
                >
                  <Typography
                    variant="h6"
                    sx={{
                      py: 1,
                      pl: 2,
                      fontWeight: 500,
                    }}
                  >
                    {title}
                  </Typography>

                  <CardMedia
                    component="img"
                    alt="title"
                    image={image}
                    width="100%"
                  />

                  <Typography
                    variant="body2"
                    sx={{ p: 2, textAlign: "justify" }}
                  >
                    {description}
                  </Typography>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
      <FormPayment
        formDetails={formDetails}
        dialogClose={dialogClose}
        setFormSubmitted={setFormSubmitted}
        setIsSnackBarOpen={setIsSnackBarOpen}
      />
      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setIsSnackBarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackBarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Application Sent!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CourseList;
