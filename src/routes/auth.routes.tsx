import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from '../pages/Auth';

const StackAuth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <StackAuth.Navigator>
      <StackAuth.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
    </StackAuth.Navigator>
  );
};

export default AuthRoutes;
