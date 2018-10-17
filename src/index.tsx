import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";

import IconButton from "@material-ui/core/IconButton";

import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FilterListIcon from "@material-ui/icons/FilterList";
import MenuIcon from "@material-ui/icons/Menu";

import { Provider } from "react-redux";
import configureStore from "./store";

import AppBottomNav from "./AppBottomNav";
import AppDrawerLeft from "./DrawerLeft";
import AppDrawerRight from "./DrawerRight";


const store = configureStore();

const styles: any = (theme: any) => ({
  title: {
    paddingTop: theme.spacing.unit / 2,
    width: "100%",
    display: "flex",
    // position: "absolute",
    // margin: "auto",
    justifyContent: "center"
  },
  nav: {
    zIndex: 1
  },
  container: {
    paddingTop: 56,
    paddingBottom: 56,
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    top: 0,
    left: 0,
    right: 0,
    position: "fixed"
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0
  },
  body: {
    height: "calc(100vh - 112px)",
    flexGrow: 1,
    overflow: "auto"
  }
});

interface IProps {
  classes: any;
}

interface IState {
  drawerOpenRight: boolean;
  drawerOpenLeft: boolean;
}

class App extends React.Component<IProps, IState> {
  public state: IState = {
    drawerOpenRight: false,
    drawerOpenLeft: false,
  };

  public toggleDrawerRight = (open: boolean) => {
    this.setState({
      drawerOpenRight: open
    });
  };
  public toggleDrawerLeft = (open: boolean) => {
    this.setState({
      drawerOpenLeft: open
    });
  };
 

  public render() {
    const { classes } = this.props;
    
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={classes.container}>
           <AppDrawerLeft
              onClose={() => this.toggleDrawerLeft(false)}
              open={this.state.drawerOpenLeft}
            />
            <AppDrawerRight
              onClose={() => this.toggleDrawerRight(false)}
              open={this.state.drawerOpenRight}
            />

            <div className={classes.header}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  className={classes.nav}
                  onClick={() => this.toggleDrawerLeft(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="title"
                  color="textSecondary"
                  className={classes.title}
                >
                  De Mafia Minute
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  className={classes.nav}
                  onClick={() => this.toggleDrawerRight(true)}
                >
                  <FilterListIcon />
                </IconButton>
              </Toolbar>
            </div>

            <div className={classes.body}>
              <AppRouter />
            </div>
            <AppBottomNav className={classes.footer} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

const StyledApp = withStyles(styles)(App);

ReactDOM.render(<StyledApp />, document.getElementById("root") as HTMLElement);
