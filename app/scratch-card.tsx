import ScratchCard from "@/components/ScratchCard/ScratchCard"
import colors from "@/theme/colors"
import { Group, RoundedRect, Text, useFont } from "@shopify/react-native-skia"
import React from "react"
import { Image, StyleSheet, View } from "react-native"

const text = "Scratch Me!"

export default function ScratchCardExample() {
  const font = useFont(require("../assets/fonts/SpaceMono-Regular.ttf"), 20)

  return (
    <View style={styles.container}>
      <ScratchCard
      >
        <ScratchCard.Behind>
          <View style={{width: 300, height: 200, borderRadius: 20}}>
            <Image
              source={require("../assets/images/nicheguys-logo.png")}
              style={{width: "100%", height: "100%"}}
              resizeMode="contain"
            />
          </View>
        </ScratchCard.Behind>
        <ScratchCard.Overlay>
          {
            ({width, height})=> {
              return (
                <Group>
                  <RoundedRect r={20} width={width} height={height} color={colors.green2} x={0} y={0}/>
                  <Text
                    font={font}
                    text={text}
                    color={colors.dark1}
                    y={(height / 2) + (20 / 3)}
                    x={(width - (font?.measureText(text).width || 0)) / 2}
                  />
                </Group>
              )
            }
          }
        </ScratchCard.Overlay>
      </ScratchCard>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
})
