import CircleLoader from "@/components/CircleLoader/CircleLoader"
import colors from "@/theme/colors"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"

export default function CircleLoaderExample() {

  return (
    <View style={styles.container}>
      <CircleLoader
        radius={150}
        circleR={8}
        colors={[colors.p2, colors.orange1]}
        isPlaying={true}
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
