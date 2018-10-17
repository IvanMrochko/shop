import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";

import { withStyles } from "@material-ui/core/styles";

import React from "react";

import ProductCard from "./ProductCard";

const styles: any = (theme: any) => ({
  description: {
    padding: theme.spacing.unit
  },
  tab: {
    textTransform: "capitalize"
  }
});

interface IProps {
  description: string;
  classes: any;
}

interface IState {
  index: number;
}

class DetailsTabs extends React.Component<IProps> {
  public state: IState = {
    index: 0
  };

  public handleChangeIndex = (index: number) => {
    this.setState({
      index
    });
  };

  public render() {
    const { description, classes } = this.props;

    return (
      <div>
        <Tabs
          value={this.state.index}
          onChange={(_event: React.ChangeEvent<{}>, value: any) =>
            this.handleChangeIndex(value)
          }
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Описание" className={classes.tab} />
          <Tab label="Рекомендуем" className={classes.tab} />
          <Tab label="Отзывы" className={classes.tab} />
        </Tabs>
        <SwipeableViews
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div className={classes.description}>
            <Typography gutterBottom align="justify">
              {description}
            </Typography>
          </div>

          <div>
            <ProductCard id="1" />
            <ProductCard id="2" />
            <ProductCard id="3" />
          </div>
          <div>Пока нет отзывов. Вы будете первым</div>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(DetailsTabs);
