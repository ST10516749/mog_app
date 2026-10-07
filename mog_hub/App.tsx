import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainScreen from './components/MainScreen';
import Volunteer from './components/Volunteer';
import Booking from './components/Booking';
import Membership from './components/Membership';
import Gallery from './components/Gallery';

type DrawerParamList = {
  Home: undefined;
  Volunteer: undefined;
  Booking: undefined;
  Membership: undefined;
  Gallery: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            marginTop: 70,
          },
        }}
      >

        <Drawer.Screen
          name="Home"
          component={MainScreen}
        />

        <Drawer.Screen
          name="Volunteer"
          component={Volunteer}
        />

        <Drawer.Screen
          name="Booking"
          component={Booking}
        />

        <Drawer.Screen
          name="Membership"
          component={Membership}
        />

        <Drawer.Screen
          name="Gallery"
          component={Gallery}
        />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}