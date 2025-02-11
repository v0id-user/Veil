import Reaction from "./reaction";

interface Visibility {
    seen: boolean;
    deleted: boolean;
    deletedAt: Date;
    seenAt: Date;
}

interface Timestamps {
    createdAt: Date;
}

interface Participants {
    sender: string;
    receiver: string;
}

interface Identifiers {
    roomId: string;
    messageId: string;
}

interface Direction {
    from: boolean;
    to: boolean;
}

interface MessageMetaData {
    visibility: Visibility;
    timestamps: Timestamps;
    participants: Participants;
    identifiers: Identifiers;
    reactions: Reaction[];
    direction: Direction;
}


export default MessageMetaData;