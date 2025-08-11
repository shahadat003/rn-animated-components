import RadialProgress from "@/components/RadialProgress/RadialProgress"
import Slider from "@/components/Slider"
import colors from "@/theme/colors"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useSharedValue } from "react-native-reanimated"

export default function RadialProgressExample() {
  const progress = useSharedValue(0)
  const [lineCount, setLineCount] = useState(10)

  return (
    <View style={styles.container}>
      <RadialProgress
        progress={progress}
        font={require("../assets/fonts/SpaceMono-Regular.ttf")}
        fontSize={30}
        innerColor={colors.dark1}
        lineColor={colors.p1}
        lineCount={lineCount}
        lineHeight={35}
        animationConfig={{
          scale: 1.25,
          opacity: 0.4
        }}
      />
      <View style={{marginTop: 20, rowGap: 10}}>
        <Text style={styles.title}>
          {"Progress"}
        </Text>
        <Slider
          onChange={(val)=> progress.value = val}
        />
      </View>
      <View style={{marginTop: 20, rowGap: 10}}>
        <Text style={styles.title}>
          {"Line Count"}
        </Text>
        <Slider
          onChange={(val)=> setLineCount(Math.floor(val))}
          range={[10, 100]}
        />
      </View>
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
  title: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 24,
    color: colors.p2
  }
})
