import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SafeAreaView } from "react-navigation";
import { RootNavigator } from "./MainTabNavigator";
import configureStore from "../store/CreateStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { store, persistor } = configureStore();

class Todo extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <SafeAreaView style={{flex:1}}> */}
          <RootNavigator />
          {/* </SafeAreaView> */}
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("Todo", () => Todo);

export default Todo;
