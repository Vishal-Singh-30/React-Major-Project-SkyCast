import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./InfoBox.css";
// cold icon
import AcUnitIcon from '@mui/icons-material/AcUnit';
// hot icon
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// rain icon
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({info}){
    // base image !
    const INIT_IMAGE_URL = "https://images.unsplash.com/photo-1466527496777-6ed64c30572e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1696355108742-09c898a1d521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1542267207-f8127b454605?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            info.humidity > 80
            ? RAIN_URL 
            : (info.temp >15)
            ? HOT_URL 
            : COLD_URL
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80? <ThunderstormIcon/> : (info.temp >15)? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
            
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        
    </div>
}



// export info box component ! 
export default InfoBox;