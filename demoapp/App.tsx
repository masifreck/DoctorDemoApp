import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {primarycolor} from './Screen/utils';
import Home from './Screen/Home';
import Book from './Screen/Book';
import SplashScreen from './Screen/Splash';
import LoginScreen from './Screen/LogPage';
import Login from './Screen/LoginScreen';
import SignUpScreen from './Screen/SignUpScreen';
import LoginPhone from './Screen/LoginPhone';
import Loginotp from './Screen/Loginotp';
import Dashboard from './Screen/User/Dashboard';
import AllHospital from './Screen/User/AllHospital';
import DoctorDetails from './Screen/User/DoctorDetails';
import AllDoctor from './Screen/User/AllDoctor';
import Doctor from './Screen/User/Doctor';
import DateTime from './Screen/User/DateTime';
import BookAppointment from './Screen/User/BookAppointment';
import Profile from './Screen/User/Profile';
import AppointmentHistory from './Screen/User/AppointmentHistory';
import Notification from './Screen/User/Notification';
import HelpSupport from './Screen/User/HelpSupport';
import EditProfile from './Screen/User/EditProfile';
import ForgetPassword from './Screen/ForgetPassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UserTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Date') {
            iconName = 'calendar-week';
          } else if (route.name === 'Profile') {
            iconName = 'user-circle';
          } else if (route.name === 'Chat') {
            iconName = 'comment-dots';
          }
          return (
            <Icon name={iconName} size={focused ? 32 : 24} color={color} />
          );
        },
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              fontSize: focused ? 12 : 10,
              fontWeight: 'bold',
              color: focused ? primarycolor : '#92f7c0',
            }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 10,
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
          borderTopLeftRadius: 20, // Add border radius to the top left corner
          borderTopRightRadius: 20, // Add border radius to the top right corner
          overflow: 'hidden',
          marginHorizontal: 0, // Ensure children adhere to border radius
        },
        tabBarActiveTintColor: primarycolor,
        tabBarInactiveTintColor: '#92f7c0',
      })}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Date"
        component={AppointmentHistory}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Chat" component={Book} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logind"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPhone"
          component={LoginPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loginotp"
          component={Loginotp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllHospital"
          component={AllHospital}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorDetails"
          component={DoctorDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllDoctor"
          component={AllDoctor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DateTime"
          component={DateTime}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{headerShown: false}}
        />

        {/* UserProfile */}

        <Stack.Screen
          name="AppointmentHistory"
          component={AppointmentHistory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="usertabs"
          component={UserTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
