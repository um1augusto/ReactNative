import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { User, Body } from '../types/CardTypes';

const Feed = () => {
    // Exemplos de dados para os cards
    const user1: User = {
        name: 'John Doe',
        photoUrl: 'https://robohash.org/johndoe',
    };

    const body1: Body = {
        text: 'This is a sample post text.',
        imageUrl: 'https://picsum.photos/200',
    };

    const user2: User = {
        name: 'Jane Smith',
        photoUrl: 'https://robohash.org/janesmith',
    };

    const body2: Body = {
        text: 'Another example post text.',
        imageUrl: 'https://picsum.photos/200',
    };

    return (
        <ScrollView style={styles.container}>
            <Card user={user1} body={body1} />
            <Card user={user2} body={body2} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});

export default Feed;
