import { Artist, Content, RestrictionReason, SimplifiedAlbum } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject|Objects Index}
 */
export interface SimplifiedTrack extends Omit<Content, 'images' | 'external_ids'> {
	artists: Artist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean | 'unknown';
	is_playable: boolean;
	linked_from: LinkedTrack;
	preview_url: string;
	restrictions: RestrictionReason;
	track_number: number;

	/**
	 * The object type; always `track`.
	 */
	type: 'track';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-linkedtrackobject|Objects Index}
 */
export type LinkedTrack = Omit<Content, 'external_ids' | 'images' | 'name'>;

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-trackobject|Objects Index}
 */
export interface Track extends SimplifiedTrack, Pick<Content, 'external_ids'> {
	album: SimplifiedAlbum;
	popularity: number;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-savedtrackobject|Objects Index}
 */
export interface SavedTrack {
	added_at: string;
	track: Track;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-tuneabletrackobject|Objects Index}
 */
export interface TuneableTrack {
	acousticness: number;
	danceability: number;
	duration_ms: number;
	energy: number;
	instrumentalness: number;
	key: number;
	liveness: number;
	loudness: number;
	mode: number;
	popularity: number;
	speechiness: number;
	tempo: number;
	time_signature: number;
	valence: number;
}

// SECTION Endpoints

export interface GetMultipleTracks {
	ids: string;
	market?: string;
}

export interface GetTrack {
	market?: string;
}

export interface GetMultipleTracksAudioFeatures {
	ids: string;
}

// !SECTION
