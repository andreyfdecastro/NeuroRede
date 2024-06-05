import React from 'react';
import { View, Text, Image } from 'react-native';
import NeuroLogo from '../../../assets/neuroLogo.png';

const Message = ({post}) => {
  return (
    <View style={styles.messageContainer}>
      <Image style={styles.logo} source={NeuroLogo} />
      <View style={styles.messageBox}>
        <Text style={styles.sender}>{post.sender}</Text>
        <Text>{post.text}</Text>
        {post.attachment && <Text>{post.attachment}</Text>}
      </View>
    </View>
  );
};

const MessagingApp = () => {
  const { posts } = useContext(PostsContext);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>General</Text>
      </View>
      {posts.map((post, index) => (
        <Message key={index} post={post} />
      ))}
    </View>
  );
}

export default MessagingApp;