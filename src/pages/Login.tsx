import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  styled,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
};

export const StyledButton = styled(Button)({
  backgroundColor: "#FFDE59",
  "&:hover": {
    backgroundColor: "#b79e39",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Login: React.FC<{ login: (name: string) => void }> = ({ login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = ({ name }) => {
    try {
      login(name);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card
      sx={{ mt: 10, maxWidth: "600px", mx: "auto", py: 2 }}
      variant="outlined"
    >
      <CardHeader
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
        title="Enter your name"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mx: 3 }}
        >
          <TextField
            id="name"
            type="text"
            label="Your Name"
            variant="outlined"
            {...register("name", {
              required: "Please provide your name",
            })}
          />
        </CardContent>
        <CardActions
          sx={{ justifyContent: "center", alignItems: "center", gap: 4 }}
        >
          <StyledButton
            variant="contained"
            type="submit"
          >
            Enter
          </StyledButton>
        </CardActions>
      </form>
    </Card>
  );
};

export default Login;
