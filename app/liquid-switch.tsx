import LiquidSwitch from "@/components/LiquidSwitch/LiquidSwitch"
import colors from "@/theme/colors"
import React from "react"
import { StyleSheet, View } from "react-native"

export default function LiquidSwitchExample() {

  return (
    <View style={styles.container}>
      <LiquidSwitch
        onChange={(val)=> console.log(val)}
        size={60}
        gap={6}
        trackColors={{
          true: colors.blue1,
          false: colors.dark4
        }}
        thumbColor= {"white"}
        images= {{
          true: {
            source: require("../assets/icons/check.png"),
            width: 30,
            height: 30,
            fit: "contain",
          },
          false: {
            source: require("../assets/icons/x.png"),
            width: 30,
            height: 30,
            fit: "contain",
          }
        }}
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
