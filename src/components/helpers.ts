
export const createCurrentDate = () => {
    const messageDate = new Date()
    return messageDate.toLocaleDateString() +
        ' в ' + messageDate.toLocaleTimeString();
}