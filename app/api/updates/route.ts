
import { getCurrentlyPlaying } from '@/lib/spotify'
import { formatTrackInfo } from '@/utils/helpers/format';

export async function GET() {
  // SPOTIFY DATA
  const currentlyPlaying = await getCurrentlyPlaying();
  const isTrackPlaying = ( currentlyPlaying.status === 200 )
  let trackInfo = {}

  if ( isTrackPlaying ) {
    trackInfo = await currentlyPlaying.json();
  }

  const Updates = {
    playing : isTrackPlaying ? formatTrackInfo(trackInfo) : '',
  }

  return Response.json( Updates );
}

