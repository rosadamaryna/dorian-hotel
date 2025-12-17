import { useEffect, useState } from "react";

export function useRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/rooms")
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        setLoading(false);
      });
  }, []);

  return { rooms, loading };
}
