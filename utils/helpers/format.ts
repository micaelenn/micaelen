export function formatTrackInfo(info: any) {
    const track = {
        name: info.item.name,
        artist: info.item.artists[0].name
    }
    
    return track
}