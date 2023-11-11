# Overview

This React Native project is designed to fetch and display a list of characters from a server, allowing users to view detailed information about each character and manage their favorites. The application provides features like adding characters to favorites, displaying statistical data based on gender, and a reset functionality to clear the favorites list.

# F.A.Q.

## 1. Why not use any state management tool like Redux Toolkit?

For this application, we've assessed that its scale and complexity do not warrant the introduction of a state management library like Redux Toolkit. Our decision is grounded in the following considerations:

- Simplicity and Overhead: The application is relatively small. Introducing a state management library would add unnecessary complexity and overhead. We aim to keep the codebase as simple and maintainable as possible, especially when the existing React state management (using useState API) suffices for our needs.

- Performance Considerations: State management libraries are powerful, but they come with a performance cost. For small applications, this cost can outweigh the benefits. Our current setup is optimized for the application's size and offers adequate performance without the additional layer of a state management tool.

- Ease of Understanding and Maintenance: By avoiding external state management libraries, new developers or contributors can understand and start working on the project more quickly. This aligns with our goal to keep the project accessible and easy to maintain.

## 2. Why not use any library for icons orr add webp?

We have chosen not to use an external library for icons for the following reasons:

- imited Icon Usage: Our application only requires a handful of icons (currently three). In such a scenario, introducing an entire library just for a few icons can be seen as overkill.

- Performance and Size Considerations: Adding an icon library, even a lightweight one, increases the application's size and can have an impact on performance. By using simple text symbols, we keep our application more lightweight and faster to load.

- Simplicity and Direct Control: Using text symbols gives us direct control over the icons without relying on external dependencies. This approach allows for simpler updates and maintenance, as we're not bound by the constraints or updates of a third-party library.

- Customizability and Consistency: With text symbols, we can easily customize the appearance to match the application's design without worrying about the availability or style consistency that might come with an icon library.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
