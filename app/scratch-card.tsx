import ScratchCard from "@/components/ScratchCard/ScratchCard"
import { Group, LinearGradient, RoundedRect, Text, useFont, vec } from "@shopify/react-native-skia"
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
                  <RoundedRect r={20} width={width} height={height} x={0} y={0}>
                    <LinearGradient
                      start={vec(0, 0)}
                      end={vec(width, height)}
                      colors={["#f2b5d4", "#7bdff2"]}
                    />
                  </RoundedRect>
                  <Text
                    font={font}
                    text={text}
                    color={"white"}
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
