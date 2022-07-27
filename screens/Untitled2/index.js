import { ImageBackground } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 0,
      top: 0,
      position: "absolute",
      height: 352,
      width: 197,
      backgroundColor: "#000000",
      borderRadius: 0,
      color: "#777777"
    }}></View><ImageBackground source={{
      uri: "data:image/png;base64,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"
    }} resizeMode="cover" style={{
      left: 39,
      top: 100,
      position: "absolute",
      width: 122,
      height: 47
    }}></ImageBackground></View>;
};

export default Untitled2;