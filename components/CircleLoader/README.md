# 🔵 CircleLoader

A circular animated loader built with **React Native Skia** and **Reanimated**.  
Balls move back and forth on a perfect circular path with smooth color transitions.

## ✨ Features

- Smooth circular motion with easing  
- Customizable radius, ball size, and colors  
- Built with performance in mind using
- Fully self-contained and copy-paste ready  

## 📦 Usage

This component is **self-contained** and can be used by simply copying the file.

### Steps

1. **Copy and paste** the `CircleLoader.tsx` file into your project  
2. **Install required dependencies** if not already installed:

   ```bash
   npx expo install react-native-reanimated @shopify/react-native-skia
   ```

3. **Use it inside your component**:

   ```tsx
   import CircleLoader from "./CircleLoader";

   export default function App() {
     return <CircleLoader radius={100} circleR={8} colors={["#F00", "#0F0", "#00F"]} />
   }
   ```

## 🛠 Prerequisites

- React Native Reanimated  
- React Native Skia

## ⚙️ Props

| Prop      | Type       | Required | Default                                     | Description                          |
|-----------|------------|----------|---------------------------------------------|--------------------------------------|
| `radius`  | `number`   | No       | `120`                                       | Radius of the outer circle           |
| `circleR` | `number`   | No       | `10`                                        | Radius of each individual circle     |
| `colors`  | `string[]` | No       | `["#EF5A57", "#F5AF00", "#4BAA4E"]`         | Color array used for animation       |

---

Made with ❤️ by **niche.guys**
