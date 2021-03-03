import { Nullable } from '@api-typings/core';
import { Content, DatePrecision, SimplifiedShow } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedepisodeobject|Objects Index}
 */
export interface SimplifiedEpisode extends Omit<Content, 'external_ids'> {
	audio_preview_url: Nullable<string>;
	description: string;
	duration_ms: number;
	explicit: boolean | 'unknown';
	is_externally_hosted: boolean;
	is_playable: boolean;
	languages: string[];
	release_date: string;
	release_date_precision: DatePrecision;
	resume_point: ResumePoint;

	/**
	 * The object type; always `episode`.
	 */
	type: 'episode';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject|Objects Index}
 */
export interface Episode {
	/**
	 * The show on which the episode belongs.
	 */
	show: SimplifiedShow;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-resumepointobject|Objects Index}
 */
export interface ResumePoint {
	/**
	 * Whether or not the episode has been fully played by the user.
	 */
	fully_played: boolean;

	/**
	 * The user’s most recent position in the episode in milliseconds.
	 */
	resume_position_ms: number;
}

// SECTION Endpoints

/**
 * Get Spotify catalog information for several episodes based on their Spotify IDs.
 */
export interface GetMultipleEpisodes {
	ids: string;
	market?: string;
}

/**
 * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
 */
export interface GetEpisode {
	market?: string;
}

// !SECTION
