import * as React from 'react';
import { View, Text, Button,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function CreatePostScreen({ navigation, route }) {
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="Your id: "
          style={{ height: 50, padding: 10, backgroundColor: 'white' }}
          value={id}
          onChangeText={setId}
        />

        <TextInput
          multiline
          placeholder="Your Name: "
          style={{ height: 50, padding: 10, backgroundColor: 'white' }}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 50, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />


        <Button
          title="Done"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Home', { 
                id:id,
                name:name,
                post: postText 
                
            });
          }}
        />
      </>
    );
  }
export default CreatePostScreen;