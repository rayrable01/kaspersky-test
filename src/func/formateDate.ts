
export const formateDate = (data: string): string => {
    const date = new Date(data);
    const formatted = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short'
    });

    return formatted;
}