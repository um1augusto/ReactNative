import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CardProps } from '../types/CardTypes';

const Card = ({ user, body }: CardProps) => {
    const [showComments, setShowComments] = useState(false);
    const [likes, setLikes] = useState(0);

    // Dados de exemplo para comentários
    const comments = [
        { id: '1', text: 'You are GAY!' },
        { id: '2', text: 'Informacao.' },
    ];

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: user.photoUrl }} style={styles.avatar} />
                <Text style={styles.username}>{user.name}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.postText}>{body.text}</Text>
                <Image source={{ uri: body.imageUrl }} style={styles.postImage} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconButton} onPress={handleLike}>
                    <FontAwesome name="thumbs-up" size={24} color="black" />
                    <Text>{likes} Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => setShowComments(true)}>
                    <FontAwesome name="comment" size={24} color="black" />
                    <Text>Comment</Text>
                </TouchableOpacity>
            </View>

            {/* Modal de Comentários */}
            <Modal
                visible={showComments}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowComments(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Comments</Text>
                        <FlatList
                            data={comments}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Text style={styles.commentText}>{item.text}</Text>
                            )}
                        />
                        <TouchableOpacity onPress={() => setShowComments(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
    },
    body: {
        marginVertical: 10,
    },
    postText: {
        fontSize: 16,
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    commentText: {
        fontSize: 16,
        marginVertical: 5,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Card;
