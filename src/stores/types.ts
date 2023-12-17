export type State = {
    count: number,
    messages: Message[]
}

export type Message = {
    id: string,
    type: 'user' | 'gpt',
    author: 'User' | 'GTP 3.5',
    text: string,
    date: string
}