import { useEffect, useState } from "react";

export default function Hpme() {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "FF122BAA0EF62776B34FCAB3377A5694";
  const STEAM_ID = "76561198073202306";

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${STEAM_ID}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch Steam API");
        }

        const data = await response.json();
        setPlayer(data.response.players[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayer();
  }, []);

  if (loading) return <div>Loading…</div>;
  if (!player) return <div>No data</div>;

  return (
    <div>
      <h2>{player.personaname}</h2>
      <img src={player.avatarfull} alt="Avatar" />
    </div>
  );
}
