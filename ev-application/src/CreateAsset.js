import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import React from "react";
const AppLayout = React.lazy(() => import("ui/AppLayout"));

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const CreateAsset = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <React.Suspense>
      <AppLayout>
        <Grid item container spacing={2}>
          <Paper sx={{ p: 4 }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Box sx={{ mt: 5 }}>
              <Grid container flexDirection="column">
                <Grid item>
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item sx={{ mt: 2 }}>
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Detail"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Extra"
                    variant="outlined"
                  />
                </Grid>
                <Grid item sx={{ mt: 2 }}>
                  <Button variant="contained" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </AppLayout>
    </React.Suspense>
  );
};

export default CreateAsset;
