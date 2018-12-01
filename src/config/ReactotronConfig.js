import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({
    name: "Uma Mão App",
    host: "localhost",
    port: 9090,
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!