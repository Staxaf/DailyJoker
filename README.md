# DailyJoker - Mobile application to have fun every day

### Tech Stack: React Native, Typescript, React Navigation, NativeWind, Redux-Toolkit + Redux Thunk, React Native Svg, AsyncStorage, App State

### Also set up aliases for imports and svg fill color from components

### Functionality:
1. API https://sv443.net/jokeapi/v2/
2. App has 2 screens - *Today* with today’s joke and *History* with the list of jokes
3. If a new day has started - fetch a new random joke from the given API
4. Saving new joke to Async Storage.
5. Give the ability to like jokes (using AsyncStorage) and show if it’s liked on both screens
6. Save in Async Storage when user wants to quit app with App State for optimization and reduce operations with Async Storage

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
