import React from "react";
const AppLayout = React.lazy(() => import("ui/AppLayout"));
import {
  Grid,
  Stepper,
  Step,
  StepLabel,
  Paper,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useEventBus } from "shell/EventBus";
import { NotificationEvent } from "ui/Events";
import { faker } from "@faker-js/faker";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const CreateAsset = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const bus = useEventBus({
    domain: "Assets",
    sourceComponent: "CreateAsset",
  });

  const handleNext = () => {
    if (activeStep >= steps.length - 1) {
      bus.emit(
        new NotificationEvent({
          id: faker.random.alphaNumeric(),
          message: "A new ad campaign was created",
          read: false,
        })
      );
    }
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
                    {activeStep >= steps.length - 1 ? "Finish" : "Next"}
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
