import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';

// import { subDays, subHours } from 'date-fns';
// import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
// import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
// import { Scheduler } from '@aldabil/react-scheduler';
// import { generateColorHex } from 'src/utils/color-generator'
// import { Stack, Typography } from '@mui/material';
// import { MetricCard } from 'src/components/metric-card';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Ov©erview | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack>
          {/* Replace "Put content here" with the OverviewBudget component */}
          <OverviewBudget value="$24,000" difference={-11} positive={false} />
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
