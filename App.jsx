import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import storeConfig from './src/store/storeConfig';
import Forms from './src/components/Forms'

const { persistedStore, store } = storeConfig();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistedStore}>
          <Forms persistor={persistedStore} />
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
