import { Button } from "@mui/material";

function NotFound() {
  return (
    <div className="h-dvh flex flex-col gap-8 justify-center items-center bg-linear-to-tl from-gray-700 to-red-600">
      <h1 className="text-3xl font-bold animate-pulse text-white">Página Não Encontrada</h1>
      <Button variant="contained" href="/">
        Voltar para a Página Inicial
      </Button>
    </div>
  );
}

export default NotFound;
