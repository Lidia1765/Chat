import React from "react";

type Message = {
    type: 'sent' | 'received',
    author: string,
    text: string,
    date: string
}

export function InputChat() {
    const [input, setInput] = React.useState('');
    const [answer, setAnswer] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(json => setAnswer(json.data))
            .catch(err => {
                console.log(err),
                    alert(`Error: ${err.message}`)
            })
            .finally(() => setLoading(false))
    }, [messages])

    return (
        <form>
            <input
                className="input"
                type="text"
                placeholder="Введите текст"
                value={input}
                onInput={(e) => { setInput((e.target as HTMLInputElement).value) }}
            />
            <button type="submit">
                Отправить
            </button>
        </form>
    )
}
