import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import AppRoutes from './src/routes/app.routes';
import ProductsProvider from './src/contexts/products';
import Background from './src/components/Background';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ProductsProvider>
        <View style={{flex: 1, backgroundColor: '#141414'}}>
          <AppRoutes />
        </View>
      </ProductsProvider>
    </NavigationContainer>
  );
};

export default App;
