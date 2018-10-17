import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { StoreState } from "./types";

interface IProps {
  basketCount: number;
  className: string;
}

class AppBottomNav extends React.Component<IProps, {}> {
  public render() {
    const { basketCount, className } = this.props;

    return (
      <Paper className={className}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Профиль" icon={<PersonIcon />} />
          <BottomNavigationAction
            label="Меню"
            component={(props: any) => <Link to="/" {...props} />}
            icon={<Icon className="fas fa-book-open" />}
          />
          <BottomNavigationAction label="Поиск" icon={<SearchIcon />} />
          <BottomNavigationAction
            label="Корзина"
            component={(props: any) => <Link to="/check-out" {...props} />}
            icon={
              basketCount > 0 ? (
                <Badge badgeContent={basketCount} color="primary">
                  <ShoppingBasketIcon />
                </Badge>
              ) : (
                <ShoppingBasketIcon />
              )
            }
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  if (state.menu.basket.length <= 0) {
    return { basketCount: 0 };
  }
  return {
    basketCount: state.menu.basket
      .map(t => t.count)
      .reduce((prev, next) => prev + next)
  };
};

export default connect(
  mapStateToProps,
  {}
)(AppBottomNav);
