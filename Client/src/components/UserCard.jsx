import {
	Image,
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Pressable,
} from 'react-native';
import { Link } from 'expo-router';

export default function UserCard(props) {
	const user = props.user;

	return (
		<Link href={`/user/${user.id}`} asChild>
			<Pressable>
				<ImageBackground
					source={{ uri: user.coverImage }}
					style={styles.userCard}>
					<View style={styles.overlay} />
					<Image src={user.avatar} style={styles.userImage} />
					<View style={styles.userDetails}>
						<Text style={styles.userName}>{user.name}</Text>
						<Text style={styles.userHandle}>@{user.handle}</Text>
					</View>
				</ImageBackground>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	userCard: {
		backgroundColor: 'grey',
		flexDirection: 'row',
		alignItems: 'flex-end',
		padding: 10,
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 5,
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.4)',
		// position: 'absolute',
		// top: 0,
		// left: 0,
		// right: 0,
		// bottom:
		...StyleSheet.absoluteFillObject,
	},
	userImage: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderColor: 'white',
		borderWidth: 3,
		marginRight: 20,
	},
	userDetails: {},
	userName: {
		color: 'white',
		fontSize: 22,
		fontWeight: '500',
		marginBottom: 5,
	},
	userHandle: {
		color: 'white',
	},
});
