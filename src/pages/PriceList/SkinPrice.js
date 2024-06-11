import * as React from "react";
import Footer from "../Footer/Footer";
import "./priceList.css";
import SkinImage from "../../../src/Assets/SkinImg.png";
import { getDatabase, ref, get } from "firebase/database";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import ButterChicken from "../../Assets/Butter-Chicken.jpg"
function ReadData() {
  let [SkinPriceArray, setSkinPriceArray] = React.useState([]);

  const Beverages = [
    {
      title: "Cock 125 ML",
      image: ButterChicken,
      description:
        "Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
      color: "#2F58CD",
    },
    {
      title: "Butter chicken",
      image: ButterChicken,
      description:
        "Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
      color: "#2F58CD",
    },
    {
      title: "Butter chicken",
      image: ButterChicken,
      description:
        "Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
      color: "#2F58CD",
    },
  ];
  React.useEffect(() => {
    const fetchDataForBridal = async () => {
      const db = getDatabase();
      const dbRef = ref(db, "createprice/Skin");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        setSkinPriceArray(Object.values(snapshot.val()));
      } else {
        console.error("No data available");
      }
    };

    fetchDataForBridal();
  }, []);

  return (
    <Grid container spacing={2}>  {/* Add Grid container */}
    {Beverages.map((card) => (
      <Grid item xs={4} key={card.title}>  {/* Set item width for 3 cards */}
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            style={{ color: card.color, fontWeight: "600" }}
            title={card.title}
          />
          <CardMedia component="img" height="300px" image={card.image} alt={card.title + " dish"} />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button sx={{ backgroundColor: "#E3651D", ml: "auto" }} variant="contained">
              Order now
            </Button>
            <IconButton sx={{ ml: "auto" }} aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
}

export default function BridalTable() {
  return (
    <div>
      <div className="container">
        <div className="image-boxS">
          <img
            src={SkinImage}
            alt="Salon Lilly Bridal Prices"
            className="imageS"
          />
          <div className="BtextS">
            <h2>BEVERAGES</h2>
          </div>
        </div>
      </div>

      <ReadData />


    </div>
  );
}
