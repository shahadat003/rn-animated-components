import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber"
import colors from "@/theme/colors"
import React, { useRef, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export default function AnimatedNumberExample() {
  const [number, setNumber] = useState("")
  const inputRef = useRef(null)

  return (
    <View style={styles.container}>
      <View style={{width: "100%"}}>
        <Text style={styles.title}>
          {"Translate with Spring"}
        </Text>
        <AnimatedNumber
          number={number}
          textStyle={styles.text}
          separatorAnimation={"translate"}
          containerStyle={{width: "100%", height: 40, marginTop: 16, justifyContent: "center"}}
          animationConfig={{
            type: "spring"
          }}
        />
      </View>
      <View style={{width: "100%", marginTop: 24}}>
        <Text style={styles.title}>
          {"Translate with Timing"}
        </Text>
        <AnimatedNumber
          number={number}
          textStyle={styles.text}
          separatorAnimation={"translate"}
          containerStyle={{width: "100%", height: 40, marginTop: 16, justifyContent: "center"}}
        />
      </View>
      <View style={{width: "100%", marginTop: 24}}>
        <Text style={styles.title}>
          {"Swap with Timing"}
        </Text>
        <AnimatedNumber
          number={number}
          textStyle={styles.text}
          separatorAnimation={"swap"}
          containerStyle={{width: "100%", height: 40, marginTop: 16, justifyContent: "center"}}
        />
      </View>
      <View style={{width: "100%", marginTop: 24}}>
        <Text style={styles.title}>
          {"Swap with Spring"}
        </Text>
        <AnimatedNumber
          number={number}
          textStyle={styles.text}
          separatorAnimation={"swap"}
          animationConfig={{
            type: "spring"
          }}
          containerStyle={{width: "100%", height: 40, marginTop: 16, justifyContent: "center"}}
        />
      </View>
      <TextInput
        ref={inputRef}
        autoFocus
        style={{width: "100%", height: 0, backgroundColor: "transparent", position: "absolute", bottom: 0}}
        onChangeText={setNumber}
        keyboardType="numeric"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark1,
    paddingTop: 64,
    paddingHorizontal: 20
  },
  text: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 40,
    color: colors.p2,
    shadowColor: colors.p2,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    lineHeight: 44
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginTop: 16
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.p2
  },
  buttonText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 14,
  },
  title: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 22,
    color: colors.p2,
    textAlign: "center"
  }
})
