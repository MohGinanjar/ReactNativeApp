import * as React from 'react'
import {View, Text} from 'react-native'


// export default function SettingScreen({navigation}){
//     return (
//         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Text onPress={() => alert('This is Detail Screen')} style={{fontSize:26, fontWeight:'bold',}}>
//              Setting Screen
//             </Text> 
//         </View>
//     )
// }

export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }