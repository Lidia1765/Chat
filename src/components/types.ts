export type Message = {
    text: string,
    id: string
}

export type State = {
    count: number,
    messages: Message[]
}