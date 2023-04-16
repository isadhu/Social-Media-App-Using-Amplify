import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Image,
	Pressable,
} from 'react-native';
import React from 'react';
import {
	Ionicons,
	FontAwesome,
	AntDesign,
	MaterialCommunityIcons,
	Feather,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const UserHeader = ({user, isSubscribed, setIsSubscribed}) => {
    const router = useRouter();

	return (
		<View style={{}}>
			<ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
				<View style={styles.overlay} />
				<SafeAreaView style={styles.BackIcon}>
					<Ionicons
						name='arrow-back'
						size={28}
						color='white'
						style={{ marginRight: 10 }}
						onPress={() => router.back()}
					/>
					<View>
						<Text
							style={{
								color: 'white',
								fontSize: 20,
								fontWeight: '500', // bold
								marginBottom: 5,
							}}>
							{user.name}
						</Text>
						<Text style={{ color: 'white' }}>
							1.4K Posts . 64.3K Likes . 15.3K
						</Text>
					</View>
				</SafeAreaView>
			</ImageBackground>
			<View style={{ padding: 10 }}>
				<View style={styles.avatar}>
					<Image src={user.avatar} style={styles.userImage} />
					<View style={{ flexDirection: 'row', gap: 25 }}>
						<AntDesign name='message1' size={24} color='royalblue' />
						<Feather name='star' size={24} color='royalblue' />
						<FontAwesome name='share-square-o' size={24} color='royalblue' />
					</View>
				</View>

				<Text style={styles.name}> {user.name} </Text>
				<Text style={styles.handle}> @{user.handle} </Text>
				<Text style={styles.bio}> {user.bio} </Text>

				<Text style={styles.subscribe}> Subscriptions </Text>
				<Pressable
					onPress={() => setIsSubscribed(!isSubscribed)}
					style={[
						styles.button,
						{ backgroundColor: isSubscribed ? 'white' : 'royalblue' },
					]}>
					<Text
						style={[
							styles.buttonText,
							{ color: isSubscribed ? 'royalblue' : 'white' },
						]}>
						{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
					</Text>
					<Text
						style={
							([styles.buttonText],
							{ color: isSubscribed ? 'royalblue' : 'white' })
						}>
						{user.subscriptionPrice === 0
							? 'FOR FREE'
							: `$${user.subscriptionPrice} / month`}
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default UserHeader;

const styles = StyleSheet.create({
	cover: {
		height: 200,
		width: '100%',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		...StyleSheet.absoluteFillObject,
	},
	BackIcon: {
		marginHorizontal: 10,
		marginVertical: 30,
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		marginTop: -50,
	},
	userImage: {
		height: 100,
		width: 100,
		borderRadius: 100,
		borderColor: 'white',
		borderWidth: 3,
		marginRight: 20,
	},
	name: {
		fontSize: 20,
		fontWeight: '600',
		marginVertical: 5,
	},
	handle: {
		color: 'grey',
		marginBottom: 10,
	},
	bio: { lineHeight: 20 },
	subscribe: {
		color: 'gray',
		marginTop: 20,
		fontWeight: 'bold',
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: 'gainsboro',
		padding: 15,
		paddingHorizontal: 20,
		marginVertical: 10,
		borderRadius: 50,
	},
	buttonText: {
		color: 'royalblue',
		fontWeight: '600',
	},
});
