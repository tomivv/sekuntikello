export function parseTime(time) {
    return `${parseInt((time/60000)%60)}:${parseInt((time/1000)%60)}.${parseInt((time%1000))}`;
}