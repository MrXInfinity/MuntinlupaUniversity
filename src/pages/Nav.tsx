import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoImg from "../assets/logo.png";
import { StyledButton } from "./Login";

type NavPropTypes = {
  user: string;
  logout: () => void;
  children: React.ReactNode;
};

const Nav: React.FC<NavPropTypes> = ({ user, logout, children }) => {
  return (
    <Container sx={{ px: 0 }}>
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
        {user && (
          <StyledButton
            variant="contained"
            endIcon={<LogoutIcon />}
            sx={{ height: "50%" }}
            onClick={() => logout()}
          >
            Log out
          </StyledButton>
        )}
      </AppBar>
      {children}
    </Container>
  );
};

export default Nav;
