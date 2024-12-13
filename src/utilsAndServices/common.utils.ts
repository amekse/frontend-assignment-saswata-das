function debounce(action: (event: React.MouseEvent<HTMLDivElement>)=>void, delay = 200) {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    return (event:React.MouseEvent<HTMLDivElement>) => {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                action(event);
                clearTimeout(timeoutId);
            }, delay)
        }
    }
}

export {
    debounce
}