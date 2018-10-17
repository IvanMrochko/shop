import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IBasket, IChnageBacketItemAction, StoreState } from "../types";
import { changeBasketItem } from "./../actions";

import { RouteComponentProps } from "react-router-dom";

import "./../index.css";

import CheckOutCard from "./CheckOutCard";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    marginTop: -theme.spacing.unit
  }
});

interface IProps extends RouteComponentProps<{}> {
  basket: IBasket[];
  classes: any;
}

interface IDispatch {
  changeBasketItem: (id: string, count: number) => IChnageBacketItemAction;
}

class Basket extends React.Component<IProps & IDispatch, {}> {
  public openCategory = (id: string) => {
    this.props.history.push("/products/" + id);
  };

  public renderItem = (basket: IBasket, index: number) => {
    
    return (
      <CheckOutCard
        key={"product-item-" + index}
        product={basket.product}
        onChange={this.handleChange}
        count={basket.count}
        price={basket.product.price}
      />
    );
  };

  public render() {
    const { basket, classes } = this.props;

    return <div className={classes.root}>{basket.map(this.renderItem)}</div>;
  }

  private handleChange = (id: string, count: number) => {
    if (count > 0) {
      this.props.changeBasketItem(id, count);
    }
  };
}

const mapStateToProps = (state: StoreState) => {
  return {
    basket: state.menu.basket
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeBasketItem: bindActionCreators(changeBasketItem, dispatch)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Basket)
);
