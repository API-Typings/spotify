import { Nullable, RangeOf } from '@api-typings/core';
import { Content, Episode, PublicUser, Track } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject|Objects Index}
 */
export interface SimplifiedPlaylist extends Omit<Content, 'external_ids'> {
	collaborative: boolean;
	description?: Nullable<string>;
	owner: PublicUser;
	public: Nullable<boolean>;
	snapshot_id: string;
	tracks: PlaylistTracksRef;

	/**
	 * The object type; always `playlist`.
	 */
	type: 'playlist';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject|Objects Index}
 */
export interface Playlist extends Omit<SimplifiedPlaylist, 'tracks'> {
	tracks: Nullable<PlaylistTrack>[];
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject|Objects Index}
 */
export interface PlaylistTrack {
	/**
	 * The date and time the track or episode was added. Note that some very old playlists may
	 * return `null` in this field.
	 */
	added_at: Nullable<string>;

	/**
	 * The Spotify user who added the track or episode. Note that some very old playlists may
	 * return `null` in this field.
	 */
	added_by: Nullable<PublicUser>;

	/**
	 * Whether this track or episode is a [local file][1] or not.
	 *
	 * [1]: https://developer.spotify.com/web-api/local-files-spotify-playlists/
	 */
	is_local: boolean;

	/**
	 * Information about the track or episode.
	 */
	track: Track | Episode;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-playlisttracksrefobject|Objects Index}
 */
export interface PlaylistTracksRef {
	/**
	 * A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
	 */
	href: string;

	/**
	 * Number of tracks in the playlist.
	 */
	total: number;
}

// SECTION Endpoints

export interface GetPlaylists {
	limit?: RangeOf<1, 50>;
	offset?: number;
}

export interface GetUserPlaylists {
	limit?: RangeOf<1, 50>;
	offset?: number;
}

export interface CreatePlaylist {
	name: string;
	public?: boolean;
	collaborative?: boolean;
	description?: string;
}

export interface GetPlaylist {
	market?: string;
	fields?: string;
	additional_types?: string;
}

export interface ChangePlaylistDetails {
	name?: string;
	public?: boolean;
	collaborative?: boolean;
	description?: string;
}

export interface GetPlaylistItems {
	market?: string;
	fields?: string;
	limit?: RangeOf<0, 100>;
	offset?: number;
	additional_types?: string;
}

export interface AddPlaylistItems {
	position?: number;
	uris?: string;
}

export interface ModifyPlaylistItems {
	uris?: string[];
	range_start?: number;
	insert_before?: number;
	range_length?: number;
	snapshot_id?: string;
}

export interface RemovePlaylistItems {
	tracks: string[];
	snapshot_id?: string;
}

// !SECTION
