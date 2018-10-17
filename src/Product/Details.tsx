import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

import DetailsTabs from "./DetailsTabs";

const styles = (theme: any) => ({
  root: {
    marginLeft: 2 * theme.spacing.unit,
    marginRight: 2 * theme.spacing.unit
  },
  media: {
    paddingTop: "56.25%"
  }
});

interface IProps {
  img: string;
  name: string;
  size: string;
  price: number;
  description: string;
  classes: any;
  onAdd: () => void;
}

class Product extends React.Component<IProps> {
  public render() {
    const { onAdd, name, img, price, size, description, classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container direction="column">
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Typography variant="title">{name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button color="primary" size="large" onClick={onAdd}>
                  Заказать
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Typography variant="caption">{size}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subheading" align="center">
                  {price.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <DetailsTabs description={description} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Product);
