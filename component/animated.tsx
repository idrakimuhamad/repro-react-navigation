import { useState } from "react";
import { Button, Text, View } from "react-native";
import Animated, { Layout } from "react-native-reanimated";

export function AnimatedLayout() {
  const [collapse, setCollapse] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Animated.View
        layout={Layout.springify()}
        style={{
          paddingVertical: collapse ? 60 : 120,
        }}
      >
        <Animated.View layout={Layout.springify()}>
          <Text style={{ fontSize: 60, fontWeight: "700" }}>Example</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View layout={Layout.springify()}>
        <Button title="Toggle" onPress={() => setCollapse((prev) => !prev)} />
      </Animated.View>
      <Animated.View layout={Layout.springify()}>
        <View
          style={{
            padding: 24,
          }}
        >
          <Text style={{ textAlign: "center", marginBottom: 16 }}>
            This example uses doesn't use the `headerBackground` prop from
            Expo-Router `Stack.Screen`
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}
