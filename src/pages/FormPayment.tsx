import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, UseFormRegister } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "./Login";

type FormData = {
  registrantName: string;
  email: string;
  contactNumber: number | undefined;
  chosenCourse: string;
};

const FormPayment: React.FC<{
  formDetails: { userName: string; courseTitle: string; open: boolean };
  dialogClose: () => void;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  formDetails: { userName, courseTitle, open },
  dialogClose,
  setFormSubmitted,
  setIsSnackBarOpen,
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
    dialogClose();
    setIsSnackBarOpen(true);
  };

  console.log(errors);

  return (
    <Dialog
      open={open}
      onClose={dialogClose}
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
          <TextField
            fullWidth
            type="text"
            variant="outlined"
            label="Chosen Course"
            disabled
            value={courseTitle}
            {...register("chosenCourse")}
          />
          <TextField
            fullWidth
            type="text"
            variant="outlined"
            label="Name"
            disabled
            value={userName}
            {...register("registrantName")}
          />

          <TextField
            fullWidth
            type="email"
            variant="outlined"
            label="Email"
            {...register("email", { required: "Please provide your email" })}
            helperText={errors ? errors?.email?.message : ""}
          />
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
        </DialogContent>
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
