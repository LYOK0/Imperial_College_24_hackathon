import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import CalendarIcon from '@heroicons/react/24/solid/CalendarIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import PresentationChartLineIcon from '@heroicons/react/24/solid/PresentationChartLineIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: (
      <SvgIcon fontSize="small">
        <CalendarIcon />
      </SvgIcon>
    )
  },

  {
    title: 'Readiness Forecast',
    path: '/readiness',
    icon: (
      <SvgIcon fontSize="small">
        <PresentationChartLineIcon />
      </SvgIcon>
    )
  }
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
