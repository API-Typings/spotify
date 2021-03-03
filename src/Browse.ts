import { Nullable, RangeOf } from '@api-typings/core';
import { Image, SimplifiedTrack } from './';
import { TuneableTrack } from './Track';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject|Objects Index}
 */
export interface AudioFeatures extends Partial<TuneableTrack> {
	id: string;
	track_href: string;
	type: 'audio_features';
	uri: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-categoryobject|Objects Index}
 */
export interface Category {
	href: string;
	icons: Image[];
	id: string;
	name: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject|Objects Index}
 */
export interface RecommendationSeed {
	afterFilteringSize: number;
	afterRelinkingSize: number;
	href: Nullable<string>;
	id: string;
	initialPoolSize: number;
	type: RecommendationSeedType;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject|Objects Index}
 */
export interface Recommendations {
	/**
	 * An array of [recommendation seed objects][1].
	 *
	 * [1]: https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject
	 */
	seeds: RecommendationSeed[];

	/**
	 * An array of [track objects (simplified)][1] ordered according to the parameters supplied.
	 *
	 * [1]: https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject
	 */
	tracks: SimplifiedTrack[];
}

export type RecommendationSeedType = 'artist' | 'track' | 'genre';

// SECTION Endpoints

/**
 * Get a list of new album releases featured in Spotify.
 */
export interface GetAllNewReleases {
	country?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
}

/**
 * Get a list of Spotify featured playlists.
 */
export interface GetAllFeaturedPlaylists {
	country?: string;
	locale?: string;
	timestamp?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
}

/**
 * Get a list of categories used to tag items in Spotify.
 */
export interface GetAllCategories {
	country?: string;
	locale?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
}

/**
 * Get a single category used to tag items in Spotify.
 */
export interface GetCategory {
	country?: string;
	locale?: string;
}

/**
 * Get a list of Spotify playlists tagged with a particular category.
 */
export interface GetCategoryPlaylists {
	country?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
}

/**
 * Recommendations are generated based on the available information for a given seed entity and
 * matched against similar artists and tracks. If there is sufficient information about the
 * provided seeds, a list of tracks will be returned together with pool size details.
 *
 * For artists and tracks that are very new or obscure there might not be enough data to generate
 * a list of tracks.
 */
export interface GetRecommendations {
	limit?: RangeOf<1, 100>;
	market?: string;
	seed_artists: string;
	seed_genres: string;
	seed_tracks: string;
	min_acousticness?: number;
	max_acousticness?: number;
	target_acousticness?: number;
	min_danceability?: number;
	max_danceability?: number;
	target_danceability?: number;
	min_duration_ms?: number;
	max_duration_ms?: number;
	target_duration_ms?: number;
	min_energy?: number;
	max_energy?: number;
	target_energy?: number;
	min_instrumentalness?: number;
	max_instrumentalness?: number;
	target_instrumentalness?: number;
	min_key?: number;
	max_key?: number;
	target_key?: number;
	min_liveness?: number;
	max_liveness?: number;
	target_liveness?: number;
	min_loudness?: number;
	max_loudness?: number;
	target_loudness?: number;
	min_mode?: number;
	max_mode?: number;
	target_mode?: number;
	min_popularity?: number;
	max_popularity?: number;
	target_popularity?: number;
	min_speechiness?: number;
	max_speechiness?: number;
	target_speechiness?: number;
	min_tempo?: number;
	max_tempo?: number;
	target_tempo?: number;
	min_time_signature?: number;
	max_time_signature?: number;
	target_time_signature?: number;
	min_valence?: number;
	max_valence?: number;
	target_valence?: number;
}

// ANCHOR Search

export interface SearchItem {
	q: string;
	type: string;
	market?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
	include_external?: 'audio';
}

// !SECTION
