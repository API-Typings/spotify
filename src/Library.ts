// SECTION Endpoints

import { RangeOf } from '@api-typings/core';

/**
 * Get a list of the albums saved in the current Spotify user's `Your Music` library.
 */
export interface GetSavedAlbums {
	limit?: RangeOf<1, 50>;
	offset?: number;
	market?: string;
}

/**
 * Save one or more albums to the current user's `Your Music` library.
 */
export interface SaveAlbums {
	ids: string;
}

/**
 * Remove one or more albums from the current user's `Your Music` library.
 */
export interface RemoveAlbums {
	ids: string;
}

/**
 * Check if one or more albums is already saved in the current Spotify user's `Your Music` library.
 */
export interface CheckSavedAlbums {
	ids: string;
}

/**
 * Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.
 */
export interface GetSavedTracks {
	limit?: RangeOf<1, 50>;
	offset?: number;
	market?: string;
}

/**
 * Save one or more tracks to the current user’s ‘Your Music’ library.
 */
export interface SaveTracks {
	ids: string;
}

/**
 * Remove one or more tracks from the current user’s ‘Your Music’ library.
 */
export interface RemoveTracks {
	ids: string;
}

/**
 * Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.
 */
export interface CheckSavedTracks {
	ids: string;
}

/**
 * Get a list of shows saved in the current Spotify user’s library. Optional parameters can be
 * used to limit the number of shows returned.
 */
export interface GetSavedShows {
	limit?: RangeOf<1, 50>;
	offset?: number;
}

/**
 * Save one or more shows to current Spotify user’s library.
 */
export interface SaveShows {
	ids: string;
}

/**
 * Delete one or more shows from current Spotify user’s library.
 */
export interface RemoveShows {
	ids: string;
	market?: string;
}

/**
 * Check if one or more shows is already saved in the current Spotify user’s library.
 */
export interface CheckSavedShows {
	ids: string;
}

// !SECTION
