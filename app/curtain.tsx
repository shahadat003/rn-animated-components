import Curtain  from "@/components/Curtain/Curtain"
import colors from "@/theme/colors"
import { Canvas, Group, Paint, Rect, Shader, Skia, useClock } from "@shopify/react-native-skia"
import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import { useDerivedValue, useSharedValue } from "react-native-reanimated"

const {width, height} = Dimensions.get("screen")

export default function CurtainExample() {
  const animValue = useSharedValue(0)
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/nicheguys-logo.png")}
        style={{width: 300, height: 1000}}
        resizeMode="contain"
      />
      <Curtain
        progress={animValue}
        containerStyle={{position: "absolute"}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark1,
    justifyContent: "center",
    alignItems: "center",
  },
  playText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 24,
    color: "white"
  }
})
