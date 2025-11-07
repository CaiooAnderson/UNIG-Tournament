import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function Welcome() {
  const navigate = useNavigate();

  const HomePage = () => {
    navigate("/home");
  };
  return (
    <div className="flex h-dvh justify-center items-center bg-linear-to-tl from-gray-300 to-blue-600">
      <Button variant="contained" onClick={HomePage}>
        Começar
      </Button>
    </div>
  );
}

export default Welcome;
