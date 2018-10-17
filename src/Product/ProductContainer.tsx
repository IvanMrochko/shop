import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";

import SwipeableViews from "react-swipeable-views";

const { virtualize, bindKeyboard } = require("react-swipeable-views-utils");

import { IAddBacketAction, IProduct, StoreState } from "../types";
import { addBasket } from "./../actions";
import Details from "./Details";

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

interface INavProps {
  id: string;
}

interface IProps extends RouteComponentProps<INavProps> {
  products: IProduct[];
  categoryName: string;
}

interface IState {
  index: number;
}

interface IDispatchProp {
  addBasket: (id: string) => IAddBacketAction;
}

class ProductContainer extends React.Component<IProps & IDispatchProp, IState> {
  public state: IState = {
    index: 0
  };

  public handleAdd = (id: string) => {
    this.props.addBasket(id);
  };

  public backToMenu = () => {
    this.props.history.push("/");
  };

  public handleChangeIndex = (index: number) => {
    this.setState({
      index
    });
  };

  public renderItem = (params: any) => {
    const { index, key } = params;
    const product: IProduct = this.props.products[index];

    return (
      <Details
        key={key}
        onAdd={() => this.handleAdd(product.id)}
        name={product.title}
        price={product.price}
        size={product.size}
        img={product.image}
        description={product.description}
      />
    );
  };

  public render() {
    const page: string =
      this.state.index + 1 + "/" + this.props.products.length;

    return (
      <div>
        <Grid
          style={{
            paddingLeft: 8,
            paddingRight: 16,
            marginTop: -8
          }}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={9}>
            <Typography variant="title" onClick={this.backToMenu}>
              <IconButton color="inherit" aria-label="ArrowBack">
                <ArrowBack />
              </IconButton>
              {this.props.categoryName}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" align="right">
              {page}
            </Typography>
          </Grid>
        </Grid>

        <VirtualizeSwipeableViews
          resistance
          slideCount={this.props.products.length}
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
          slideRenderer={this.renderItem}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addBasket: bindActionCreators(addBasket, dispatch)
});
const mapStateToProps = (state: StoreState, ownProps: IProps) => {
  const id = ownProps.match.params.id;
  const category = state.menu.categories.find(p => p.id === id);

  if (category == null) {
    throw new Error("Not found category " + id);
  }
  return {
    products: state.menu.products.filter(p => p.category_id === id),
    categoryName: category.name,
    image: category.image
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
