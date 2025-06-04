import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert
} from "react-native";
import { useState } from "react";
import { setStatusBarStyle } from "expo-status-bar";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden={isStatusBarVisible}/>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!")}/>
      <Button title="Alert2" onPress={() => Alert.alert("Invalid data!", "Incorrect DOB")}/>
      <Button title="Alert3" onPress={() => Alert.alert("Invalid data!", "Incorrect DOB", [
        {text: 'Cancel', onPress: () => console.log("Cancel pressed")},
        {text: 'Ok', onPress: () => console.log("Ok pressed")},
        {text: 'Dismiss', onPress: () => console.log("Dismiss pressed")},
        {text: 'Close', onPress: () => console.log("Close pressed")}



      ])}/>

      <ActivityIndicator size={"large"} color={"midnightblue"} animating={true}
      />
      <ScrollView>
        <Button
          title="Press"
          onPress={() => setIsModalVisible(true)}
          color="midnightblue"
        />
        <Pressable
          onPress={() => console.log("Image Pressed")}
          onPressIn={() => console.log("Image Pressed In")}
          onPressOut={() => console.log("Image Pressed out")}
          onLongPress={() => console.log("Image Long Pressed")}
        >
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Pressable>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Component</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
