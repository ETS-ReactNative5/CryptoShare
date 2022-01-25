import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Utils from "../utils/Utils";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Activity";
import { useDispatch, useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../styles/Global";
import Requests from "../utils/Requests";

export default function Activity({ navigation }: any) {
	const dispatch = useDispatch();
	const { theme } = useSelector((state: any) => state.theme);

	const [query, setQuery] = useState<string>("");
	
	useFocusEffect(Utils.backHandler(navigation));

	return (
		<ImageBackground source={Utils.getBackground(theme)} resizeMethod="scale" resizeMode="cover">
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
				<SafeAreaView style={styles.area}>
					<View style={[styles.areaSearchWrapper, styles[`areaSearchWrapper${theme}`]]}>
						<TextInput 
							placeholder="Query..." 
							selectionColor={Colors[theme].mainContrast} 
							placeholderTextColor={Colors[theme].mainContrastDarker} 
							style={[styles.inputSearch, styles[`inputSearch${theme}`]]} 
							onChangeText={(value) => setQuery(value)}
							value={query}
						/>
						<TouchableOpacity style={[styles.button, styles.buttonSearch, styles[`buttonSearch${theme}`]]}>
							<Text style={[styles.searchText, styles[`searchText${theme}`]]}>Search</Text>
						</TouchableOpacity>
					</View>
					<ScrollView style={[styles.wrapper, styles[`wrapper${theme}`]]} contentContainerStyle={styles.wrapperContent}>

					</ScrollView>
					<View style={[styles.areaActionsWrapper, styles[`areaActionsWrapper${theme}`]]}>
						<TouchableOpacity style={[styles.button, styles.actionButton, styles[`actionButton${theme}`]]}>
							<Text style={[styles.actionText, styles[`actionText${theme}`]]}>Tools</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.actionButton, styles[`actionButton${theme}`]]}>
							<Text style={[styles.actionText, styles[`actionText${theme}`]]}>Add Activity</Text>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</ScrollView>
		</ImageBackground>
	);
}

export function fetchActivity() {
	return new Promise(async (resolve, reject) => {
		try {
			let userID = await AsyncStorage.getItem("userID");
			let token = await AsyncStorage.getItem("token");
			let key = await AsyncStorage.getItem("key") || "";
			let api = await AsyncStorage.getItem("api");

			let requests = new Requests(api);

			let activity = await requests.readActivity(token, userID);

			if(Utils.empty(activity?.data?.readActivity)) {
				resolve(null);
				return;
			}

			let activityData: any = {};
	
			let encrypted = activity?.data?.readActivity;
	
			Object.keys(encrypted).map(index => {
				let decrypted = Utils.decryptObjectValues(key, encrypted[index]);
				decrypted.activityID = encrypted[index].activityID;
				decrypted.activityTransactionID = encrypted[index].activityTransactionID;
				activityData[decrypted.activityTransactionID] = decrypted;
			});

			let sortedByDate = sortActivityDataByDate(activityData);

			resolve(sortedByDate);
		} catch(error) {
			console.log(error);
			reject(error);
		}
	});
}

export function sortActivityDataByDate(activityData: any) {
	let sorted: any = {};
	let array: any = [];

	for(let activity in activityData) {
		array.push([activity, activityData[activity].activityDate]);
	}

	array.sort(function(a: any, b: any) {
		return new Date(a[1]).getTime() - new Date(b[1]).getTime();
	});

	array.map((item: any) => {
		sorted[item[0]] = activityData[item[0]];
	});

	return sorted;
}