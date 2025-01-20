import Message from "@/interface/messages";
import User from "@/interface/users";

interface Room{
    id: string;
    name: string;
    users: User[];
    group: boolean;
    messages: Message[];
}

export default Room;