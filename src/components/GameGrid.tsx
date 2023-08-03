import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]); //telling the ts compiler that the data stored in the games state var is an array[] of objs of type Game
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/xgames") //telling the ts compiler the 'type' of response expectes
      .then((res) => setGames(res.data.results)) //.results is also an array, hence updating the games state var of array objs with an array is valid
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
