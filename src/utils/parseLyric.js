
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyric) {
    const lines = lyric.split("\n")
    // const res = lines.map(item => {
    //     let temp = item.split("]")
    //     let time = temp[0].slice(1)
    //     let content = temp[1];
    //     return {time,content}
    // })
    const lyrics = []
    for(let line of lines) {
        if(line) {
            const res = parseExp.exec(line)
            if(res) continue
            const time1 = res[1] * 60 *1000
            const time2 = res[2] * 1000
            const time3 = res[3].length === 3 ? res[3] * 1 : res[3] * 10
            const time = time1 + time2 + time3
            const content = line.replace(parseExp,"").trim()
            const temp = {time,content}
            lyrics.push(temp)
        }
    }
    return lyrics
}