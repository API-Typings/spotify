import { RangeOf } from '@api-typings/core';
import { Content, Copyright, SimplifiedEpisode } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedshowobject|Objects Index}
 */
export interface SimplifiedShow extends Omit<Content, 'external_ids'> {
	available_markets: string[];
	copyrights: Copyright[];
	description: string;
	explicit: boolean;
	is_externally_hosted: boolean;
	languages: string[];
	media_type: string;
	publisher: string;

	/**
	 * The object type; always `show`.
	 */
	type: 'show';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-showobject|Objects Index}
 */
export interface Show extends SimplifiedShow {
	episodes: SimplifiedEpisode[];
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-savedshowobject|Objects Index}
 */
export interface SavedShow {
	added_at: string;

	/**
	 * Information about the show.
	 */
	show: SimplifiedShow;
}

// SECTION Endpoints

export interface GetMultipleShows {
	ids: string;
	market?: string;
}

export interface GetShow {
	market?: string;
}

export interface GetShowEpisodes {
	market?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
}

// !SECTION
