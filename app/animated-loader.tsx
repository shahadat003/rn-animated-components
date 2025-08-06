import Loader from "@/components/Loader"
import colors from "@/theme/colors"
import React from "react"
import { StyleSheet, View } from "react-native"

export default function ScratchCardExample() {

  return (
    <View style={styles.container}>
      <Loader
        radius={80}
        circleR={4}
        colors={["#EF5A57", "#F5AF00", "#4BAA4E","#EF5A57", "#F5AF00", "#4BAA4E"]}
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
})
