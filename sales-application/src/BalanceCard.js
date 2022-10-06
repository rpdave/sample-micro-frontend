import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useEventBus } from "shell/EventBus";
import { DataGridEvent } from "ui/Events";

const BalanceCard = () => {
  const startingBalance = 0;
  const [balance, setBalance] = useState(startingBalance);
  const [available, setAvailable] = useState(startingBalance);

  const bus = useEventBus({ domain: "Sales", sourceComponent: "Balance Card" });

  const salesEventSub = bus.ofType$(DataGridEvent).subscribe((event) => {
    if (event.payload.type === "Sale") {
      setBalance((balance) => balance + parseInt(event.payload.price));
      setAvailable(
        (available) =>
          available +
          parseInt(event.payload.price) -
          Math.floor(Math.random() * 100)
      );
    }
  });

  useEffect(() => {
    return () => {
      salesEventSub.unsubscribe();
    };
  }, [salesEventSub]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Available
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          ${available}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Current balance ${balance}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Sales</Button>
      </CardActions>
    </Card>
  );
};

export default BalanceCard;
