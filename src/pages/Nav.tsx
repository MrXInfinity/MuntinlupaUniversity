import {
  AppBar,
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoImg from "../assets/logo.png";
import { StyledButton } from "./Login";

type NavPropTypes = {
  user: string;
  logout: () => void;
  children: React.ReactNode;
};

const Nav: React.FC<NavPropTypes> = ({ user, logout, children }) => {
  const mediaQueryChecker = useMediaQuery("(min-width:400px)");

  return (
    <Container sx={{ px: 0, width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
          background: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            src={LogoImg}
            height="100px"
            width="100px"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: 0,
            }}
          >
            <Typography
              sx={{
                color: "#FFDE59",
                fontFamily: "Poppins",
                fontSize: 20,
              }}
            >
              MUNTINLUPA
            </Typography>
            <Typography
              sx={{
                color: "#13325B",
                fontFamily: "Poppins",
                fontSize: 20,
              }}
            >
              UNIVERSITY
            </Typography>
          </Box>
        </Box>
        {user ? (
          mediaQueryChecker ? (
            <StyledButton
              variant="contained"
              endIcon={<LogoutIcon />}
              sx={{ height: "50%" }}
              onClick={() => logout()}
            >
              Log Out
            </StyledButton>
          ) : (
            <IconButton
              sx={{ mr: 1, color: "#FFDE59" }}
              onClick={() => logout()}
            >
              <LogoutIcon />
            </IconButton>
          )
        ) : null}
      </AppBar>
      {children}
    </Container>
  );
};

export default Nav;
