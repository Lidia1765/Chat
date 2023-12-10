export type State = {
    count: number,
    messages: Message[]
}

export type Message = {
    id: string,
    type: 'sent' | 'received',
    author: string,
    text: string,
    date: string
}