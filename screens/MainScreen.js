import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { Text, View,ScrollView } from "react-native";
import { Icon } from "expo";
import BrowseIcons from "../components/BrowseIcons";
import BookList from '../components/BookList';

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView />
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center", flex: 0.86 }}>
            <Text
              style={{
                marginLeft: 60,
                fontWeight: "600",
                fontSize: 18,
                color: "#8C9AA9"
              }}
            >
              EXPLORE
            </Text>
          </View>
          <View style={{ flex: 0.1, alignItems: "flex-end" }}>
            <Icon.Ionicons
              name="ios-apps"
              size={25}
              style={{ color: "#8C9AA9" }}
            />
          </View>
        </View>
        <View style={{ marginTop: 40, marginLeft: 20 }}>
          <Text style={{ fontSize: 17, color: "#8C9AA9", fontWeight: "500" }}>
            Browse
          </Text>
          <View style={{ flexDirection: "row",justifyContent: 'space-between',alignItems:'center' }}>
            <BrowseIcons
              name="ios-albums"
              text={`Personal${"\n"}Development`}
            />
            <BrowseIcons
              name="ios-beer"
              text={`Professional${"\n"}Development`}
            />
            <BrowseIcons
              name="ios-briefcase"
              text={`For${"\n"}Leisure`}
            />
            <BrowseIcons
              name="ios-color-palette"
              text={`Food for${"\n"}Thought`}
            />
          </View>
        </View>
        <View style={{ marginTop: 40, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, color: "#8C9AA9", fontWeight: "500" }}>
            Trending
          </Text>
          <BookList/>
        </View>
        <View style={{ marginTop: 40, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, color: "#8C9AA9", fontWeight: "500" }}>
            Recent
          </Text>
          <BookList/>
        </View>
      </ScrollView>
    );
  }
}
export default MainScreen;
