import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { AnyPtrRecord } from 'dns';
import { Box } from '@mui/material';

function App() {

  const renderList = (count: any[]) => {
    return count.map((value) => {
      return <Grid>
        <Box>{value}</Box>
      </Grid>
    })
  }

  return (
    <Grid container spacing={5}>{
      renderList([0,1,2,3,4,5,6,7])
    }
    </Grid>
  );
}

export default App;
