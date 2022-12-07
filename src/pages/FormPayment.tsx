import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, UseFormRegister } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "./Login";
import Receipt from "./Receipt";

type FormData = {
  registrantName: string;
  email: string;
  contactNumber: number | undefined;
  chosenCourse: string;
};

const FormPayment: React.FC<{
  formDetails: {
    userName: string;
    courseTitle: string;
    open: boolean;
    label: string;
  };
  dialogClose: () => void;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submittingForm: () => void;
}> = ({
  formDetails: { userName, courseTitle, open, label },
  dialogClose,
  setFormSubmitted,
  setIsSnackBarOpen,
  submittingForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      chosenCourse: courseTitle,
      registrantName: userName,
      email: "",
      contactNumber: undefined,
    },
  });

  const formSubmission = () => {
    setFormSubmitted(true);
    submittingForm();
    setIsSnackBarOpen(true);
  };

  console.log(errors);

  return (
    <Dialog
      open={open}
      onClose={dialogClose}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle sx={{ display: "flex", alignItems: "center", pb: 0 }}>
        <Typography variant="h6">Application Form</Typography>
        <IconButton
          sx={{ ml: "auto", pr: 0 }}
          onClick={() => dialogClose()}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit(formSubmission)}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 4, sm: 8 }}
            sx={{ justifyContent: "center" }}
          >
            <Grid
              item
              xs={4}
            >
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Chosen Course"
                disabled
                value={courseTitle}
                {...register("chosenCourse")}
              />
            </Grid>
            <Grid
              item
              xs={4}
            >
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Name"
                disabled
                value={userName}
                {...register("registrantName")}
              />
            </Grid>
            <Grid
              item
              xs={4}
            >
              <TextField
                fullWidth
                type="email"
                variant="outlined"
                label="Email"
                {...register("email", {
                  required: "Please provide your email",
                })}
                helperText={errors ? errors?.email?.message : ""}
              />
            </Grid>
            <Grid
              item
              xs={4}
            >
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                label="Contact Number"
                {...register("contactNumber", {
                  required: "Please provide your contact number",
                })}
                helperText={errors ? errors?.contactNumber?.message : ""}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <Receipt receiptLabel={label} />
        <DialogActions sx={{ px: 3, pb: 2, pt: 0 }}>
          <StyledButton
            sx={{ color: "white" }}
            type="submit"
          >
            Submit
          </StyledButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormPayment;
