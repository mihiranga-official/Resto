import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Paelladish from "../../Assets/Prawn-and-Chorizo-Paella-Featured-2.jpg"
import masaladosa from "../../Assets/masala-dosa.jpg"
import ButterChicken from "../../Assets/Butter-Chicken.jpg"
import Tandoorichicken from "../../Assets/Tandoori_chicken.jpg"
import { Grid } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 function OrderOnline() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const mealCards=[
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    color: "#2F58CD",
  },
  {
    title:"Masala dosa",
    image:masaladosa,
    description:"A famous traditional South Indian food that's made from a thin or thick batter of rice and lentils.",
    color: "#2F58CD",
  },
  {
    title:"Butter chicken",
    image:ButterChicken,
    description:"Also known as Murgh Makhani, this beloved curry originated in Punjab, a northern region of India.",
    color: "#2F58CD",
  },
  {
    title:"Tandoori chicken",
    image:Tandoorichicken,
    description:"A flavorful grilled chicken dish from North India that's often served with mint chutney, salad, and butter naan.",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  },
  {
    title:"Shrimp and Chorizo Paella",
    image:Paelladish,
    description:"This impressive paella is a perfect party dish...",
    color: "#2F58CD",
  }
]


  return (
//     <Card sx={{ maxWidth: 345 }}>
// <CardHeader
//   style={{ color: "#2F58CD" ,fontWeight:'600'}}
//   title="Shrimp and Chorizo Paella"
// />
//       <CardMedia
//         component="img"
//         height="300px"
//         image={Paelladish}
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.primary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <Button sx={{backgroundColor:"#E3651D",ml:"auto",}}  variant="contained">Order now</Button>
//         <IconButton sx={{ml:"auto"}} aria-label="share">
//           <ShareIcon />
//         </IconButton>
//       </CardActions>
  
//     </Card>

<>
<Typography sx={{fontFamily:"fantasy",fontSize:"35px",textAlign:"center",mb:2,color:"#DC6B19"}}>Treat yourself to the best. Order Delicious Plate Now  😋</Typography>    
        
     
<Grid container spacing={2}>  {/* Add Grid container */}
  {mealCards.map((card) => (
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
  {/* <Divider sx={{mt:17}}></Divider> */}
</>
  );
}
export default OrderOnline
