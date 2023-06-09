import { Stack } from 'expo-router';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default function RootLayout() {
	return <Stack screenOptions={{ headerShown: false}} />;
}
