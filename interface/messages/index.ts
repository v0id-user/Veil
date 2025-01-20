interface Message {
    content: string;
    createdAt: Date;
    sender: string;
    receiver: string;
    roomId: string;
}


export default Message;