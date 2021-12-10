import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { createServer } from "http";
import { Server } from "socket.io";
import { io as client } from "socket.io-client";
import Message from "./models/Message";
import addEvents from "./bot/events";
import resolvers from "./graphql/resolvers/resolvers";
import DB from "./utils/DB";
import Utils from "./utils/Utils";

const portAPI = 3190;
const portBot = 3191;

Utils.checkFiles();

const schema = buildSchema(Utils.getSchema());

const app = express();

const httpServer = createServer();

(async () => {
	const io = new Server(httpServer);
	await addEvents(io);

	const db = new DB();
	await db.initialize();

	Utils.db = db;

	app.use(cors());
	app.use(express.urlencoded({ extended:true }));
	app.use(express.json());

	app.use("/graphql", graphqlHTTP({ 
		schema: schema,
		rootValue: resolvers,
		graphiql: true,
		customFormatErrorFn: (error): any => {
			return error.message.split("!")[1];
		}
	}));

	app.listen(portAPI, () => {
		console.log(`GraphQL API Listening At http://localhost:${portAPI}/graphql`);
	});

	app.post("/login", async (request, response) => {
		let username = request.body.username;
		let password = request.body.password;

		response.send(await Utils.login(username, password));
	});

	app.post("/verifyToken", async (request, response) => {
		let userID = request.body.userID;
		let token = request.body.token;

		response.send(await Utils.verifyToken(userID, token));
	});

	httpServer.listen(portBot, () => {
		console.log(`Bot Server Listening At http://localhost:${portBot}`);
	});

	let socket = client("http://localhost:3191");
	socket.emit("message", { userMessage:"I bought two BTC @ $50000 today." });
	socket.emit("message", { userMessage:"I sold a hundred ADA @ $1.5 today." });
	socket.emit("message", { userMessage:"I sold five hundred ETH at $4000 on the 5th of December." });
	socket.emit("message", { userMessage:"I sent 50 LRC to Michael yesterday." });
	socket.emit("message", { userMessage:"I transferred 2 DOT to Rachel." });
	socket.emit("message", { userMessage:"I received 3 ALGO from staking yesterday." });
	socket.emit("message", { userMessage:"Set my BTC holdings to 1." });
	socket.emit("message", { userMessage:"Set my ETH holdings to five." });
	socket.emit("message", { userMessage:"Remove UNI from my holdings." });
	socket.emit("message", { userMessage:"Add LRC to my watchlist." });
	socket.emit("message", { userMessage:"Remove ETH from my watchlist." });

	console.log("Starting Server... ", new Date().toTimeString().split(" ")[0]);
})();