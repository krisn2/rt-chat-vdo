import z from "zod"

export enum SupportedMessage {
    JoinRoom = "JOIN_ROOM",
    SendMessage = "SEND_MESSAGE",
    UpvoteMessage = "UPVOTE_MESSAGE"
}

export type IncomingMessage = {
    type:SupportedMessage.JoinRoom,
    payload: InitMessageType
} | {
    type:SupportedMessage.SendMessage,
    payload: UserMessageType
} | {
    type:SupportedMessage.UpvoteMessage,
    payload: UpvoteMessageType
}

const InitMessage = z.object({
    name: z.string(),
    userId: z.string(),
    roomId:z.string(),
})

type InitMessageType = z.infer<typeof InitMessage>;



const UserMessage = z.object({
    userId: z.string(),
    roomId:z.string(),
    message: z.string(),
})

type UserMessageType = z.infer<typeof UserMessage>;

const UpvoteMessage = z.object({
    userId: z.string(),
    roomId:z.string(),
    chatId: z.string(),
})

type UpvoteMessageType = z.infer<typeof UpvoteMessage>;

