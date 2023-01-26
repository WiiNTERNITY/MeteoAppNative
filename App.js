import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./routes/HomeStack"

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )

}

export default App;