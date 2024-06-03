import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import NeuroLogo from '../../../assets/neuroLogo.png';
import styles from './styles';

export default function App() {
    const [postText, setPostText] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [posts, setPosts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setAttachment(result.uri);
        }
    };

    const handlePost = () => {
        if (editIndex !== null) {
            const newPosts = [...posts];
            newPosts[editIndex] = { text: postText, attachment };
            setPosts(newPosts);
            setEditIndex(null);
        } else {
            setPosts([...posts, { text: postText, attachment }]);
        }
        setPostText('');
        setAttachment(null);
    };

    const handleEdit = (index) => {
        setPostText(posts[index].text);
        setAttachment(posts[index].attachment);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setPosts(posts.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Image style={styles.logo} source={NeuroLogo} />
            </View>
            <View style={styles.formBox}>
                <TextInput
                    style={styles.input}
                    value={postText}
                    onChangeText={setPostText}
                    placeholder="Criar postagem..."
                />
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text>Anexar mídia</Text>
                </TouchableOpacity>
                {attachment && <Text>{attachment}</Text>}
                <Button title={editIndex !== null ? "Atualizar" : "Enviar"} onPress={handlePost} />
                {posts.map((post, index) => (
                    <View key={index}>
                        <Text>{post.text}</Text>
                        {post.attachment && <Text>{post.attachment}</Text>}
                        <Button title="Editar" onPress={() => handleEdit(index)} />
                        <Button title="Deletar" onPress={() => handleDelete(index)} />
                    </View>
                ))}
            </View>
        </View>
    );
}