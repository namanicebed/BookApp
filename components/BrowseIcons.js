import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon } from "expo";
class BrowseIcons extends Component {
  render() {
    return (
      <View style={{marginTop:20,margin:10,justifyContent: 'center',alignItems: 'center',}}>
        <Icon.Ionicons
          name={this.props.name}
          size={45}
          style={{ color: "#8C9AA9" }}
        />

        <Text style={{ color: "#8C9AA9",fontSize:10 }}>{this.props.text}</Text>
      </View>
    );
  }
}
export default BrowseIcons;
