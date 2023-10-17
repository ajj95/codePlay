import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import UserLeave from 'pages/UserLeave';
import ApprovalAttendance from 'pages/ApprovalAttendance';

// render - dashboard
const CalendarPage = Loadable(lazy(() => import('pages/CalendarPage')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - UserAttendanceTotal page
const UserAttendanceTotal = Loadable(lazy(() => import('pages/UserAttendanceTotal')));
// render - SeeAllAttendance page
const SeeAllAttendance = Loadable(lazy(() => import('pages/SeeAllAttendance')));
// render - SeeUserAttendance page
const SeeUserAttendance = Loadable(lazy(() => import('pages/SeeUserAttendance')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - user information page
const UserInformation = Loadable(lazy(() => import('pages/UserInformation')));
const UserInformationModify = Loadable(lazy(() => import('pages/UserInformationModify')));

//render - Main Manager page
const QueryUserInformation = Loadable(lazy(() => import('pages/QueryUserInformation')));
const SettingAccess = Loadable(lazy(() => import('pages/SettingAccess')));
const SettingAuthority = Loadable(lazy(() => import('pages/SettingAuthority')));
const SettingAttendancePolicy = Loadable(lazy(() => import('pages/SettingAttendancePolicy')));

// render - user attendance
const UserAttendance = Loadable(lazy(() => import('pages/UserAttendance')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'userAttendanceTotal',
      element: <UserAttendanceTotal />
    },
    {
      path: 'seeAllAttendance',
      element: <SeeAllAttendance />
    },
    {
      path: 'seeUserAttendance',
      element: <SeeUserAttendance />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'userInformation',
      element: <UserInformation />
    },
    {
      path: 'userInformationModify',
      element: <UserInformationModify />
    },
    {
      path: 'queryUserInformation',
      element: <QueryUserInformation />
    },
    {
      path: 'settingAccess',
      element: <SettingAccess />
    },
    {
      path: 'settingAuthority',
      element: <SettingAuthority />
    },
    {
      path: 'calendar',
      element: <CalendarPage />
    },
    {
      path: 'userattendance',
      element: <UserAttendance />
    },
    {
      path: 'userleave',
      element: <UserLeave />
    },
    {
      path: 'approvalattendance',
      element: <ApprovalAttendance/>
    },
    {
      path: 'settingAttendancePolicy',
      element: <SettingAttendancePolicy />
    }
  ]
};

export default MainRoutes;
