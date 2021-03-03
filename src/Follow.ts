import { RangeOf } from '@api-typings/core';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-followersobject|Objects Index}
 */
export interface Followers {
	/**
	 * A link to the Web API endpoint providing full details of the followers; `null` if not
	 * available.
	 *
	 * Please note that this will always be set to `null`, as the Web API does not support it at
	 * the moment.
	 */
	href: null;

	/**
	 * The total number of followers.
	 */
	total: number;
}

/**
 * Add the current user as a follower of a playlist.
 */
export interface FollowPlaylist {
	public?: boolean;
}

/**
 * Check to see if one or more Spotify users are following a specified playlist.
 */
export interface UsersFollowsPlaylist {
	ids: string;
}

/**
 * Get the current user’s followed artists.
 */
export interface GetUserFollowedArtists {
	/**
	 * The ID type: currently only `artist` is supported.
	 */
	type: 'artist';

	after?: string;
	limit?: RangeOf<1, 50>;
}

/**
 * Add the current user as a follower of one or more artists or other Spotify users.
 */
export interface FollowEntity {
	/**
	 * The ID type.
	 */
	type: 'artist' | 'user';
	ids: string | string[];
}

/**
 * Remove the current user as a follower of one or more artists or other Spotify users.
 */
export interface UnfollowEntity {
	/**
	 * The ID type.
	 */
	type: 'artist' | 'user';
	ids: string | string[];
}

/**
 * Check to see if the current user is following one or more artists or other Spotify users.
 */
export interface GetFollowingState {
	/**
	 * The ID type.
	 */
	type: 'artist' | 'user';
	ids: string;
}

// !SECTION
