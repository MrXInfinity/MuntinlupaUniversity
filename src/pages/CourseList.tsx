import {
  Alert,
  Box,
  Card,
  CardActionArea,
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const courseSelection = [
  {
    image: AccImg,
    title: "BS in Accountancy",
    description:
      "Home to many CPAs and Topnotchers. Mun-U offers a high-quality CPA board preparation course handled by professors that are Reliable, Equipped, Stable, and Adept.",
    label: "Accountancy",
  },
  {
    image: FashionImg,
    title: "BS in Fashion Design",
    description:
      "This course introduces students to a variety of aspects in the fashion industry. Practical techniques are combined with each individual's creativity to learn how to work with a number of different materials.",
    label: "FashionDesign",
  },
  {
    image: ITImg,
    title: "BS in Information Technology",
    description:
      "As a pioneer in computer education in the Philippines, Mun-U is considered as one of the reliable producers of graduates who are highly competent in different technologies and applications needed in the industry.",
    label: "InformationTechnology",
  },
];

const CourseList: React.FC<{ user: string }> = ({ user }) => {
  const [formDetails, setFormDetails] = useState({
    userName: "",
    courseTitle: "",
    open: false,
    label: "",
  });
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dialogClose = () => {
    setFormDetails({
      userName: "",
      courseTitle: "",
      open: false,
      label: "",
    });
  };

  const submittingForm = () => {
    setFormDetails({
      ...formDetails,
      userName: "",
      open: false,
      label: "",
    });
  };

  return (
    <>
      <Container sx={{ mt: 2, px: 2 }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Poppins" }}
        >
          Welcome
        </Typography>
        <Typography sx={{ fontFamily: "Poppins", fontSize: 20, mb: 3 }}>
          {user}
        </Typography>

        {formSubmitted ? (
          <Card
            color="success"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: 1,
              borderColor: "success.main",
              p: 4,
            }}
          >
            <Typography
              variant={"h4"}
              sx={{
                fontFamily: "Poppins",
                fontSize: 20,
                textAlign: "center",
                mb: 2,
                color: "#2e7d32",
              }}
            >
              You have successfuly sent an application for{" "}
              {formDetails.courseTitle}
            </Typography>
            <CheckCircleIcon
              color="success"
              fontSize="large"
            />
          </Card>
        ) : (
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ justifyContent: "center" }}
          >
            <Grid
              item
              xs={4}
              sm={8}
              md={12}
            >
              <Typography variant="h4">Courses</Typography>
            </Grid>

            {courseSelection.map(
              ({ image, title, description, label }, index) => (
                <Grid
                  item
                  xs={4}
                  key={index}
                  sx={{ maxWidth: "350px", p: 0 }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#13325B",
                      color: "white",
                    }}
                  >
                    <CardActionArea
                      onClick={() =>
                        setFormDetails({
                          userName: user,
                          courseTitle: title,
                          open: true,
                          label: label,
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
                </Grid>
              )
            )}
          </Grid>
        )}
      </Container>
      <FormPayment
        formDetails={formDetails}
        dialogClose={dialogClose}
        setFormSubmitted={setFormSubmitted}
        setIsSnackBarOpen={setIsSnackBarOpen}
        submittingForm={submittingForm}
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
