export function formatTrackInfo(info: any) { // TODO: review typing
  const track = {
    name: info.item.name,
    artist: info.item.artists[0].name
  }

  return `${track.name} - ${track.artist}`
}