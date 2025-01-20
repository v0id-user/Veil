import RoomState from "@/interface/state/room";
import { create } from 'zustand'

// TODO: Make Two states one for the rooms sidebar and one for the room interface
// TODO: Add more states like if the other end is typing or not or if it connected and secured or not

const useRoomStore = create<RoomState>((set, get) => {
    return {
        users: [],
        messages: [],
        id: '',
        name: '',
        group: false,
        setRoomId: (roomId: string) => set({ id: roomId }),
    }
});

export default useRoomStore;
