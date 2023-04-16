import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import posts from '../../assets/data/posts';
import users from '../../assets/data/users';
import UserHeader from '../../src/components/UserHeader';
import UserPost from '../../src/components/UserPost';
import { FontAwesome5 } from '@expo/vector-icons';

const ProfilePage = () => {
	const [isSubscribed, setIsSubscribed] = useState(false);

	const router = useRouter();
	const { id } = useSearchParams();

	const user = users.find((user) => user.id === id);
	if (!user) return <Text>User not found</Text>;

    if(!isSubscribed){
        return (
					<View>
						<UserHeader
							user={user}
							isSubscribed={isSubscribed}
							setIsSubscribed={setIsSubscribed}
						/>
						<View
							style={{
								backgroundColor: 'gainsboro',
								alignItems: 'center',
								padding: 20,
							}}>
							<FontAwesome5 name='lock' size={50} color='gray' />
							<Text
								style={{
									backgroundColor: 'royalblue',
									height: 50,
									borderRadius: 25,
									overflow: 'hidden',
									padding: 15,
									color: 'white',
									margin: 20,
								}}>
								Subscribe to see user's posts
							</Text>
						</View>
					</View>
				);
    }

	return (
		<FlatList
			data={posts}
			renderItem={({ item }) => <UserPost post={item} />}
			ListHeaderComponent={() => (
				<UserHeader
					user={user}
					isSubscribed={isSubscribed}
					setIsSubscribed={setIsSubscribed}
				/>
			)}
		/>
	);
};

export default ProfilePage;

const styles = StyleSheet.create({});
