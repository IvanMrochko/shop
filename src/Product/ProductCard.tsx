import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IProduct, StoreState } from "../types";

const styles: any = (theme: any) => ({
  card: {
    height: 110,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit / 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    borderRadius: 0
  },
  content: {
    height: "100%",
    padding: theme.spacing.unit
  }
});

interface IProps {
  product: IProduct;
  classes: any;
}

interface IOwnProps {
  id: string;
}

class ProductCard extends React.Component<IProps & IOwnProps> {
  public render() {
    const { product, classes } = this.props;

    return (
      <Paper
        classes={{
          root: classes.card
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
          className={classes.content}
        >
          <Grid item container>
            <Grid item xs={8}>
              <Typography variant="title">{product.title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subheading">{product.tag}</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={8}>
              <Typography variant="body1">{product.size}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" align="center">
                {product.price.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: IOwnProps) => {
  const product = state.menu.products.find(p => p.id === ownProps.id);
  if (!product) {
    throw new Error("product");
  }
  return { product };
};

const CardWithStyle = withStyles(styles)(ProductCard);

export default connect(
  mapStateToProps,
  {}
)(CardWithStyle);
