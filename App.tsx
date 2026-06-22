import { View } from "react-native";

import "./utils/TriggerStyles";
import "./src/utils/TriggerStyles";
import HelloWorld from "./scr/components/HelloWorld.tsx";
import { styles } from "./scr/utils/css.ts";

function App()
{
    return (
        <View style={styles.container}>
            <HelloWorld/>
        </View>
    );
}

export default App;