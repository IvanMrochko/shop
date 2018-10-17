import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IProduct } from "../types";

const styles: any = (theme: any) => ({
  card: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: "3px!important",
    minHeight: 80
  },
  icon: {
    height: 3 * theme.spacing.unit,
    width: 3 * theme.spacing.unit
  },
  media: {
    height: 13 * theme.spacing.unit,
    width: '100%',
    maxWidth: '150px'
    
  }

});

interface IProps {
  product: IProduct;
  count: number;
  price: number;
  classes: any;
  onChange: (id: string, count: number) => void;
}

class CheckOutCard extends React.Component<IProps> {
  public render() {
    const { product, classes, count, price, onChange } = this.props;

    return (
      <Card
        classes={{
          root: classes.card
        }}
      >
        <CardContent
          classes={{
            root: classes.content
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
             <Grid item xs={3}>
              
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                  />
                
              </Grid>
              
              <Grid item xs={9} direction="column" style={{ padding: "5px" }}>
                <Typography variant="title">{product.title}</Typography>
                <Grid  item container alignItems="center" justify="space-between" style={{ marginTop: "25px" }}>
                  <Grid item xs={4}>
                    <Typography variant="body1">{product.size} грамм</Typography>
                  </Grid>
                  <Grid item xs={6} >
                    <IconButton
                      component="span"
                      className={classes.icon}
                      onClick={() => onChange(product.id, count - 1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {count}
                    <IconButton
                      component="span"
                      className={classes.icon}
                      onClick={() => onChange(product.id, count + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2} style={{ textAlign: "right" }}>
                    <Typography >{(price*count).toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CheckOutCard);
