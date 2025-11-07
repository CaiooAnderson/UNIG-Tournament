import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
// import { useTemperature } from "../hooks/useTemperature";

function Home() {
//   const { temperature, stationName, loading, error } = useTemperature();

  return (
    <div className="h-dvh flex justify-center items-center bg-linear-to-tl from-gray-300 to-blue-600">
      <Card className="p-2">
        <CardContent>
          <Typography variant="h5">Temperatura atual:</Typography>
          <CardHeader
            // title={
            //   loading
            //     ? "Carregando..."
            //     : error
            //     ? error
            //     : temperature !== null
            //     ? `${temperature}°C em ${stationName}`
            //     : "N/A"
            // }
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" href="/logs">
            Ver mais
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;
