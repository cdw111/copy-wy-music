export function getCount(count) {
    if(count < 0) {
        return;
    }
    if(count < 10000) {
        return count
    }else if(Math.floor(count/10000) < 10000) {
        return Math.floor(count/10000) + "万";
    }else {
        return Math.floor(count/100000000) + "亿";
    }

}

export function getSizeImage(imgUrl,size) {
    return `${imgUrl}?param=${size}x${size}`;
}

export function formatTime(time) {
    let minute = Math.floor(time/60000)
    let second = Math.floor(time/1000 - minute*60)
    return `${minute >= 10 ? minute : "0" + minute}:${second >= 10 ? second : "0" + second}`
}
export function getPlaySong(id) {
    return `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
}