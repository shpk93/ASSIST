import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DotsHeader from '../components/header/DotsHeader';
import ScheduleManage_1 from '../screens/schedule-manage/ScheduleManage_1';
import ScheduleManage_2 from '../screens/schedule-manage/ScheduleManage_2';
import ScheduleManage_3 from '../screens/schedule-manage/ScheduleManage_3';
import ScheduleManage_4 from '../screens/schedule-manage/ScheduleManage_4';
import ScheduleManage_5 from '../screens/schedule-manage/ScheduleManage_5';
import CalendarSelect from '../screens/drawer-select/CalendarSelect';
import StartTimeSelect from '../screens/drawer-select/StartTimeSelect';
import EndTimeSelect from '../screens/drawer-select/EndTimeSelect';
import StadiumSelect from '../screens/drawer-select/StadiumSelect';
const ScheduleManage = createStackNavigator();

export default function ScheduleManageNav() {
  return (
    <ScheduleManage.Navigator initialRouteName="ScheduleManage_1">
      <ScheduleManage.Screen
        name="ScheduleManage_1"
        options={{
          header: () => <DotsHeader current={1} total={4} />,
        }}
        component={ScheduleManage_1}
      />
      <ScheduleManage.Screen
        name="ScheduleManage_2"
        options={{
          header: () => <DotsHeader current={2} total={4} />,
        }}
        component={ScheduleManage_2}
      />
      <ScheduleManage.Screen
        name="ScheduleManage_3"
        options={{
          header: () => <DotsHeader current={3} total={4} />,
        }}
        component={ScheduleManage_3}
      />
      <ScheduleManage.Screen
        name="ScheduleManage_4"
        options={{
          header: () => <DotsHeader current={4} total={4} />,
        }}
        component={ScheduleManage_4}
      />
      <ScheduleManage.Screen
        name="ScheduleManage_5"
        options={{
          headerShown: false,
        }}
        component={ScheduleManage_5}
      />
      <ScheduleManage.Screen
        name="CalendarSelect"
        component={CalendarSelect}
        options={{
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
      <ScheduleManage.Screen
        name="StartTimeSelect"
        component={StartTimeSelect}
        options={{
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
      <ScheduleManage.Screen
        name="EndTimeSelect"
        component={EndTimeSelect}
        options={{
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
      <ScheduleManage.Screen
        name="StadiumSelect"
        component={StadiumSelect}
        options={{
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
          headerShown: false,
        }}
      />
    </ScheduleManage.Navigator>
  );
}
