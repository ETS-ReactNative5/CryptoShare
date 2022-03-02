import { createStyle } from "../utils/StyleSheet";
import { Colors, GlobalStyle } from "./Global";
import { actionBarHeight, barHeight, screenHeight, screenWidth, statusBarHeight, windowHeight } from "./NavigationBar";

export let wrapperHeight = screenHeight - statusBarHeight - barHeight - actionBarHeight - 40;

export default createStyle<any>({
	scrollView: {
		width: "100%",
		height: "100%",
	},
	scrollViewContent: {
		justifyContent: "center", 
		alignItems: "center", 
		flexGrow: 1
	},
	area: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		alignItems: "center",
	},
	listText: {
		fontSize: 18,
		fontWeight: "bold",
		lineHeight: windowHeight - barHeight - 40 - 20 - 70 - 130 - 10,
		color: Colors.Dark.mainContrast
	},
	listTextLight: {
		color: Colors.Light.mainContrast
	},
	wrapper: {
		overflow: "hidden",
		position: "absolute",
		top: statusBarHeight + 20,
		left: 20,
		width: screenWidth - 40,
		height: wrapperHeight,
		borderRadius: GlobalStyle.borderRadius,
		backgroundColor: Colors.Dark.mainSecond,
		shadowColor: GlobalStyle.shadowColor,
		shadowOffset: GlobalStyle.shadowOffset,
		shadowOpacity: GlobalStyle.shadowOpacity,
		shadowRadius: GlobalStyle.shadowRadius,
		elevation: GlobalStyle.shadowElevation,
	},
	wrapperLight: {
		backgroundColor: Colors.Light.mainThird,
	},
	wrapperContent: {
		paddingBottom: 20
	},
	wrapperBar: {
		zIndex: 9,
		position: "absolute",
		left: 0,
		height: 60,
		width: screenWidth - 40,
		borderStyle: "solid",
		borderColor: Colors.Dark.mainThird,
		backgroundColor: Colors.Dark.mainFirstTransparent
	},
	wrapperBarLight: {
		borderColor: Colors.Light.mainThird,
		backgroundColor: Colors.Light.mainFirstTransparent
	},
	wrapperBarTop: {
		top: 0,
		borderBottomWidth: 2
	},
	wrapperBarBottom: {
		bottom: 0,
		borderTopWidth: 2
	},
	input: {
		width: screenWidth - 40 - 110,
		borderRadius: GlobalStyle.borderRadius,
		backgroundColor: Colors.Dark.mainFirstTransparent,
		color: Colors.Dark.mainContrast,
		paddingLeft: 10,
		paddingRight: 10,
		height: 40,
		position: "absolute",
		bottom: 10,
		left: 10,
		zIndex: 10,
	},
	inputLight: {
		backgroundColor: Colors.Light.mainFirstTransparent,
		color: Colors.Light.mainContrast,
	},
	sendButton: {
		position: "absolute",
		width: 80,
		zIndex: 10,
		right: 5,
		bottom: 10,
		margin: 0
	},
	button: {
		width: (screenWidth / 2) - 35,
		paddingLeft: 10,
		paddingRight: 10,
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		paddingBottom: 2,
		borderRadius: GlobalStyle.borderRadius,
		marginLeft: 5,
		marginRight: 5
	},
	iconButton: {
		width: 40,
		backgroundColor: Colors.Dark.ChatBot.accentFirst
	},
	iconButtonLight: {
		backgroundColor: Colors.Light.ChatBot.accentFirst
	},
	smallerButton: {
		width: ((screenWidth / 2) - 35) - 25,
	},
	actionText: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.Dark.accentContrast,
	},
	actionTextLight: {
		color: Colors.Light.accentContrast,
	},
	actionButton: {
		backgroundColor: Colors.Dark.ChatBot.accentFirst
	},
	actionButtonLight: {
		backgroundColor: Colors.Light.ChatBot.accentFirst
	},
	choiceButton: {
		backgroundColor: "transparent",
		borderWidth: 3,
		borderColor: Colors.Dark.ChatBot.accentFirst
	},
	choiceButtonLight: {
		backgroundColor: "transparent",
		borderColor: Colors.Light.ChatBot.accentFirst
	},
	choiceButtonActiveDark: {
		borderWidth: 0,
		backgroundColor: Colors.Dark.ChatBot.accentFirst
	},
	choiceButtonActiveLight: {
		borderWidth: 0,
		backgroundColor: Colors.Light.ChatBot.accentFirst
	},
	choiceText: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.Dark.accentContrast,
	},
	choiceTextLight: {
		color: Colors.Light.mainContrast,
	},
	choiceTextActiveDark: {
		color: Colors.Dark.accentContrast
	},
	choiceTextActiveLight: {
		color: Colors.Light.accentContrast
	},
	modalScroll: {
		backgroundColor: "rgba(0,0,0,0.9)"
	},
	modalSection: {
		maxWidth: screenWidth - 40,
		padding: 20,
		marginBottom: 20,
		backgroundColor: Colors.Dark.mainFirst,
		borderRadius: GlobalStyle.borderRadius,
		shadowColor: GlobalStyle.shadowColor,
		shadowOffset: GlobalStyle.shadowOffset,
		shadowOpacity: GlobalStyle.shadowOpacity,
		shadowRadius: GlobalStyle.shadowRadius,
		elevation: GlobalStyle.shadowElevation,
	},
	modalSectionLight: {
		backgroundColor: Colors.Light.mainFirst,
	},
	modalInfo: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.Dark.mainContrast,
		padding: 4,
	},
	modalInfoLight: {
		color: Colors.Light.mainContrast
	},
	popup: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	popupBackground: {
		position: "absolute",
		zIndex: 2,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.9)",
		justifyContent: "center",
		alignItems: "center"
	},
	popupForeground: {
		position: "absolute",
		zIndex: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	popupWrapper: {
		backgroundColor: Colors.Dark.mainFirst,
		justifyContent: "center",
		alignItems: "center",
		width: screenWidth - 80,
		maxHeight: windowHeight - 200,
		padding: 20,
		borderRadius: GlobalStyle.borderRadius
	},
	popupWrapperLight: {
		backgroundColor: Colors.Light.mainFirst
	},
	popupContent: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%"
	},
	popupChoicesWrapper: {
		flexDirection: "column",
		flexWrap: "nowrap",
		width: 200
	},
	popupButtonWrapper: {
		flexDirection: "row",
	},
	popupButton: {
		width: 110,
		marginLeft: 10,
		marginRight: 10
	},
	popupChoiceButton: {
		width: "100%",
		marginLeft: 0,
		marginBottom: 10
	},
	popupInput: {
		width: 200,
		borderRadius: GlobalStyle.borderRadius,
		backgroundColor: Colors.Dark.mainFirstTransparent,
		color: Colors.Dark.mainContrast,
		paddingLeft: 10,
		paddingRight: 10,
		height: 40,
		marginBottom: 20,
	},
	popupInputLight: {
		backgroundColor: Colors.Light.mainFirstTransparent,
		color: Colors.Light.mainContrast,
	},
	sectionButton: {
		width: 200,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 20
	},
	dangerButton: {
		backgroundColor: Colors.Dark.negativeFirst,
		marginTop: 20
	},
	dangerButtonLight: {
		backgroundColor: Colors.Light.negativeFirst
	},
});