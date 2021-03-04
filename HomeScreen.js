import * as React from 'react';
import { View, Text, Button } from 'react-native';
function HomeScreen({ navigation, route}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Create post"
          onPress={() => navigation.navigate('CreatePostScreen')}
        />
        <Text></Text>
        <Button
          title="Recycler View Screen"
          onPress={() => navigation.navigate('RecyclerList')}
        />
        <Text>New</Text>
        <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemid: route.params?.id,
            name: route.params?.name,
            post: route.params?.post
          });
        }}
      />
      </View>
    );
  }
  export default HomeScreen;