import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFvalue} from "react-native-responsive-fontsize";
 import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <Image
          source={require("../assets/story_image_1.png")}
style={styles.storyImage}
></Image>

<View style={styles.titleContainer}>
<Text style={styles.storyTitleText}>
{this.props.story.title}
</Text>

<Text Style={styles.storyAuthorText}>
  {this.props.story.author}
</Text>

<Text style={styles.descriptionText}>
{this.props.story.description}
  
</Text>



  
</View>



          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
cardContainer:{
  margin:RFvalue(13),
  backgroundColor:"#2f345d",
  borderRadius:RFvalue(20)
},

storyImage:{
  resizeMode:"contain",
  width:"95%",
  alignSelf:"center",
  height:RFvalue(250)
},
 titleContainer:{
   paddingLeft:RFvalue(20),
   justifyContent:"center"
 },
 storyTitleText:{
   fontSize:RFvalue(25),
   fontFamily:"bubblegum-sans",
   color:"white"
 }
 
});
