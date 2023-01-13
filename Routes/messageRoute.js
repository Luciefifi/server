import express from "express";
import messageController from "../Controllers/messageController";

const messageRoute =express.Router();

messageRoute.post("/createMessage",messageController.createMessage);

export default messageRoute;