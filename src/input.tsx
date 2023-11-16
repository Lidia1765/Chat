import React from "react";

export function inputChat() {

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
    })

    return (
        <input
            className="input"
            type="text"
            placeholder="Введите текст"
            value={input}
            onInput={(e) => { setInput((e.target as HTMLInputElement).value) }}
        />
    )
}
