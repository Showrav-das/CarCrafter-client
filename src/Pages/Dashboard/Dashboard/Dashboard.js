import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

// Import your components
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import DashboardHome from "./DashboardHome/DashboardHome";
import AddProduct from "./AddProduct/AddProduct";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";
import ManageAllOrder from "./ManageAllOrder/ManageAllOrder";
import EditProduct from "./ManageAllOrder/EditProduct";

const drawerWidth = 280;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = admin
    ? [
        { text: "Home", icon: <HomeIcon />, path: "/home" },
        {
          text: "Make Admin",
          icon: <AdminPanelSettingsIcon />,
          path: `${url}/makeAdmin`,
        },
        {
          text: "Add Product",
          icon: <AddCircleIcon />,
          path: `${url}/addProducts`,
        },
        {
          text: "Manage Orders",
          icon: <ManageAccountsIcon />,
          path: `${url}/manageAll`,
        },
      ]
    : [
        { text: "Home", icon: <HomeIcon />, path: "/home" },
        {
          text: "My Orders",
          icon: <ShoppingCartIcon />,
          path: `${url}/myOrders`,
        },
        // { text: "Payment", icon: <PaymentIcon />, path: `${url}/payment` },
        { text: "Review", icon: <RateReviewIcon />, path: `${url}/review` },
      ];

  const drawer = (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100%" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": {
                bgcolor: "primary.main",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              "&:hover": {
                bgcolor: "primary.light",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              borderRadius: "8px",
              m: 1,
            }}
          >
            <ListItemIcon sx={{ color: "primary.main" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={logOut}
          sx={{
            color: "error.main",
            "&:hover": {
              bgcolor: "error.light",
              color: "white",
            },
            borderRadius: "8px",
            m: 1,
          }}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="primary.main">
            Welcome to Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: 3,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: 3,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/addProducts`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/payment/:id`}>
            <Payment />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/manageAll`}>
            <ManageAllOrder />
          </Route>
          <Route path={`${path}/edit/:id`}>
            <EditProduct />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
