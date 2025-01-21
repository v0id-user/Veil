// The whole state of the app

import Message from "@/interface/messages";
import User from "@/interface/users";
import Room from "@/interface/room";

interface VeilState {
    rooms: Room[];
    wsConnection: WebSocket | null;
}

export default VeilState;
