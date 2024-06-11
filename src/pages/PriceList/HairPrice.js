import * as React from "react";
import Footer from "../Footer/Footer";
import "./priceList.css";
import HairImage from "../../../src/Assets/HairImage.png";
import { getDatabase, ref, get } from "firebase/database";
import { CardActions, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import ButterChicken from "../../Assets/Butter-Chicken.jpg"


function ReadData() {
  const [hairPriceArray, setHairPriceArray] = React.useState([]);

const hotDishes=[{
    title:"Butter chicken",
    image:ButterChicken,
    description:"Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
    color: "#2F58CD"
},
{
  title:"Butter chicken",
  image:ButterChicken,
  description:"Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
  color: "#2F58CD"
},
{
  title:"Butter chicken",
  image:ButterChicken,
  description:"Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
  color: "#2F58CD"
}
]

  React.useEffect(() => {
    const fetchDataForHair = async () => {
      const db = getDatabase();
      const dbRef = ref(db, "createprice/haircut");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        setHairPriceArray(Object.values(snapshot.val()));
      } else {
        console.error("No data available");
      }
    };

    fetchDataForHair();
  }, []);

  return (
    <Grid container spacing={2}>  {/* Add Grid container */}
    {hotDishes.map((card) => (
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
        <div className="image-boxH">
          <img
            src={HairImage}
            alt="Salon Lilly Bridal Prices"
            className="imageH"
          />
          <div className="BtextH">
            <h2>Most Common Dishes</h2>
          </div>
        </div>
      </div>

      <ReadData />

    
    </div>
  );
}
