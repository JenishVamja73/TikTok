import { Text, View } from "react-native";
import style from "./style";
const Home = () => {
    // const reels = [
    //     { id: '1', video: 'https://example.com/video1.mp4' },
    //     { id: '2', video: 'https://example.com/video2.mp4' },
    //     { id: '3', video: 'https://example.com/video3.mp4' },
    // ];
    return (
        <>
            <View style={style.container}>
                <Text style={{color:"balck "}}>Hello</Text>
                {/* <InstagramReels data={reels} /> */}
            </View>
        </>
    )
}
export default Home