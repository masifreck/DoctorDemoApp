import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { primarycolor } from './Screen/utils';
import Home from './Screen/Home';
import Book from './Screen/Book';
import SplashScreen from './Screen/Splash';
import LoginScreen from './Screen/LogPage';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function UserTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'user-circle';
          } else if (route.name === 'Date') {
            iconName = 'calendar-week';
          } else if (route.name === 'Explore') {
            iconName = 'briefcase-medical';
          } else if (route.name === 'Chat') {
            iconName = 'comment-dots';
          }
          return <Icon name={iconName} size={focused ? 32 : 24} color={color} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={{
            fontSize: focused ? 12 : 10, 
            fontWeight: 'bold', 
            color: focused ? primarycolor : '#949BA7'
          }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
          paddingBottom: 10,
          height: 60,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          borderTopLeftRadius: 20,  // Add border radius to the top left corner
          borderTopRightRadius: 20, // Add border radius to the top right corner
          overflow: 'hidden', 
          marginHorizontal:0      // Ensure children adhere to border radius
        },
        tabBarActiveTintColor: primarycolor,
        tabBarInactiveTintColor: '#949BA7',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Date" component={Book} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={Book} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


 

function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' >
        <Stack.Screen name='splash' component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{headerShown:false}}
        />
      <Stack.Screen name="usertabs" component={UserTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
