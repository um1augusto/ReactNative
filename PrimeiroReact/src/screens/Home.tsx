import {Text, View} from 'react-native';
import Post from '../components/Post';

    const Home = () => {

    return(
    <View>
        <Text>Meu titulo</Text>
        <Post title="Texto 1"/>
        <Post title="Texto 2"/>
    </View>
    );
};

export default Home;