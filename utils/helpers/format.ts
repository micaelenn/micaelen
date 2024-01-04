export function formatTrackInfo(info: any) {
  const track = {
    name: info.item.name,
    artist: info.item.artists[0].name
  }

  return `${track.name} - ${track.artist}`
}

export function formatDateToEnGB(date: string) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  })

  return formattedDate
}