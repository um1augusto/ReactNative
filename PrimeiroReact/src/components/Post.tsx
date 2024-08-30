import { View, Text } from "react-native";

interface PostProps{
    title: String;
}

const Post = ({title}: PostProps) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default Post;