import CircleLoader from "@/components/CircleLoader/CircleLoader"
import colors from "@/theme/colors"
import React, { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export default function CircleLoaderExample() {
  const [play, setPlay] = useState(false)

  return (
    <View style={styles.container}>
      <Pressable onPress={()=> setPlay(p => !p)} style={{marginBottom: 32}}>
        <Text style={styles.playText}>
          {play ? "Reset" : "Play"}
        </Text>
      </Pressable>
      <CircleLoader
        radius={80}
        circleR={4}
        colors={["#EF5A57", "#F5AF00", "#4BAA4E","#EF5A57", "#F5AF00", "#4BAA4E"]}
        isPlaying={play}
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
