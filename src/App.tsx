import {Route, Routes} from "react-router-dom";
import {Registration} from "./pages/Registration.tsx";
import {Authorization} from "./pages/Authorization.tsx";
import {Home} from "./pages/Home.tsx";
import {Profile} from "./pages/Profile.tsx";
import {Center} from "@mantine/core";

function App() {

  return (
    <Center>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Center>
  )
}

export default App
