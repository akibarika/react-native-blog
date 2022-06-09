import React, {useContext} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen: React.FC = () => {
  const blogContext = useContext(BlogContext);
  return <View>
    <Text>Index Screen</Text>
    <Text>{blogContext && blogContext.num}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default IndexScreen
