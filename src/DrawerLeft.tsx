import React from "react";
import { connect } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";
import grey from "@material-ui/core/colors/grey";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

import { IFilter, StoreState } from "./types";
const styles = (theme: any) => ({
  // root: {
  //   flexGrow: 1,
  //   marginTop: -theme.spacing.unit
  // },
  drawer: {
    backgroundColor: grey[800]
  },
  root: {
    width: 280,
    backgroundColor: grey[800]
  },
  list: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 3 * theme.spacing.unit
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: 4 * theme.spacing.unit,
    paddingBottom: theme.spacing.unit / 2
  },
  title: {
    color: grey[50]
  },
  icon: {
    height: "auto",
    color: grey[50]
  }
});

interface IProps {
  open: boolean;
  onClose: (open: boolean) => void;
  classes: any;
  filters: IFilter[];
}

class AppDrawerLeft extends React.Component<IProps, {}> {
  public renderItem = (filter: IFilter) => {
    const { classes } = this.props;
    

    return (
      <ListItem dense button className={classes.listItem}>
        <Checkbox className={classes.icon} color="default" />
        <ListItemText
          classes={{
            secondary: classes.title
          }}
          secondary={filter.name}
        />
      </ListItem>
    );
  };

  // public renderCategory = (filter: IFilter) => {
  //   const { classes } = this.props;

  //   return (
  //     <ExpansionPanel
  //       classes={{
  //         root: classes.root
  //       }}
  //     >
  //       <ExpansionPanelSummary
  //         expandIcon={<ExpandMoreIcon className={classes.title} />}
  //       >
  //         <Typography variant="headline" className={classes.title}>
  //           {filter.name}
  //         </Typography>
  //       </ExpansionPanelSummary>
  //       <ExpansionPanelDetails className={classes.list}>
  //         <div>{filter.items ? filter.items.map(this.renderItem) : null}</div>
  //       </ExpansionPanelDetails>
  //     </ExpansionPanel>
  //   );
  // };

  public render() {
    const { open, onClose, classes} = this.props;

    return (
      <Drawer
        anchor="left"
        classes={{
          paper: classes.root
        }}
        open={open}
        onClose={() => onClose(false)}
      >
        {/* {filters.map(this.renderCategory)} */}
      </Drawer>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    filters: state.menu.filters
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {}
  )(AppDrawerLeft)
);
