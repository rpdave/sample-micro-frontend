import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip, Legend
} from 'chart.js';
import {
  Doughnut
} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const App = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  return (
    <Grid container>
      <Grid item>
        <Paper sx={{p:3, textAlign:"center"}} elevation={4}>
          <Typography>Mixed Usage</Typography>
          <Doughnut data={data}  />
        </Paper>
      </Grid>
    </Grid>
  )
};

export default App;
