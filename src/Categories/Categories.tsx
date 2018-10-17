import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Swipeable from "react-swipeable";
import { StoreState } from "../types";

import { ICategory } from "./../types";

import "./../index.css";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginBottom: 2 * theme.spacing.unit
  },
  item: {
    marginLeft: 2 * theme.spacing.unit,
    marginRight: 2 * theme.spacing.unit,
    marginBottom: 3 * theme.spacing.unit
  },
  media: {
    paddingTop: "56.25%" // 16:9
  }
});

interface IProps extends RouteComponentProps<{}> {
  categories: ICategory[];
  classes: any;
}

class Categories extends React.Component<IProps, {}> {
  public mainRef: any;
  constructor(props: IProps) {
    super(props);
  }

  public openCategory = (id: string) => {
    this.props.history.push("/products/" + id);
  };

  public renderItem = (category: ICategory, index: number) => {
    const { classes } = this.props;
    return (
      <Swipeable
        key={"product-item-" + index}
        className={classes.item}
        onSwipedLeft={() => this.openCategory(category.id)}
      >
        <div>
          <Typography variant="title" className={classes.title}>
            {category.name}
          </Typography>
          <Card>
            <CardMedia
              onClick={() => this.openCategory(category.id)}
              className={classes.media}
              image={category.image}
              title="Contemplative Reptile"
            />
            <CardContent />
          </Card>
        </div>
      </Swipeable>
    );
  };

  public elementInViewport = (el: any) => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      top + height <= window.pageYOffset + window.innerHeight &&
      left + width <= window.pageXOffset + window.innerWidth
    );
  };

  public render() {
    const { categories, classes } = this.props;

    return (
      <div ref={t => (this.mainRef = t)} className={classes.root}>
        {categories.map(this.renderItem)}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  console.log(state);
  return {
    categories: state.menu.categories
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {}
  )(Categories)
);
