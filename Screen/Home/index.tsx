import { View } from "react-native";
import InstagramReels from 'react-native-instagram-reels';

const Home = () => {
    const reels = [
        { id: '1', video: 'https://example.com/video1.mp4' },
        { id: '2', video: 'https://example.com/video2.mp4' },
        { id: '3', video: 'https://example.com/video3.mp4' },
    ];
    return (
        <>
            <View style={styles.container}>
                <InstagramReels data={reels} />
            </View>
        </>
    )
}
export default Home