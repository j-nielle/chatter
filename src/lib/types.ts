export type ISenderType = "user" | "bot";

export interface IMessage {
	text: string;
	sender: ISenderType;
}