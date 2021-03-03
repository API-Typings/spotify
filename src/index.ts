import { Nullable } from '@api-typings/core';

export * from './Album';
export * from './Artist';
export * from './Browse';
export * from './Episode';
export * from './Follow';
export * from './Playlist';
export * from './Show';
export * from './Track';
export * from './User';

export const baseURL = 'https://api.spotify.com/v1';

export type DatePrecision = 'year' | 'month' | 'day';

/**
 * @source {@link https://developer.spotify.com/documentation/general/guides/scopes/#user-top-read|Authorization Scopes}
 */
export enum OAuth2Scope {
	ImageUpload = 'ugc-image-upload',
	ReadRecentlyPlayed = 'user-read-recently-played',
	TopRead = 'user-top-read',
	ReadPlaybackPosition = 'user-read-playback-position',
	ReadPlaybackState = 'user-read-playback-state',
	ModifyPlaybackState = 'user-modify-playback-state',
	ReadCurrentlyPlaying = 'user-read-currently-playing',
	RemoteControl = 'app-remote-control',
	Streaming = 'streaming',
	ModifyPlaylistPublic = 'playlist-modify-public',
	ModifyPlaylistPrivate = 'playlist-modify-private',
	ReadPrivatePlaylist = 'playlist-read-private',
	ReadCollabrativePlaylist = 'playlist-read-collaborative',
	FollowModify = 'user-follow-modify',
	FollowRead = 'user-follow-read',
	LibraryModify = 'user-library-modify',
	LibraryRead = 'user-library-read',
	ReadEmail = 'user-read-email',
	ReadPrivate = 'user-read-private'
}

export interface Content {
	/**
	 * Known external IDs for the content.
	 */
	external_ids: ExternalID;

	/**
	 * Known external URLs for this content.
	 */
	external_urls: ExternalURL;

	/**
	 * A link to the Web API endpoint providing full details of the content.
	 */
	href: string;

	/**
	 * The [Spotify ID][1] for the content.
	 *
	 * [1]: https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids
	 */
	id: string;

	/**
	 * The cover art for the content in various sizes, widest first
	 */
	images: Image[];

	/**
	 * The name of the content
	 */
	name: string;

	/**
	 * The [Spotify URI] for the album.
	 *
	 * [1]: https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids
	 */
	uri: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-copyrightobject|Objects Index}
 */
export interface Copyright {
	text: string;
	type: 'C' | 'P';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-cursorobject|Objects Index}
 */
export interface Cursor {
	/**
	 * The cursor to use as key to find the next page of items.
	 */
	after: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject|Objects Index}
 */
export interface CursorPaging<T> {
	cursors: Cursor;
	href: string;
	items: T[];
	limit: number;
	next: Nullable<string>;
	total: number;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/#authentication-error-object|Web API}
 */
export interface AuthenticationError {
	error: string;
	error_description: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-errorobject|Objects Index}
 */
export interface Error {
	message: string;
	status: number;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-externalidobject|Objects Index}
 */
export interface ExternalID {
	/**
	 * [International Article Number][1].
	 *
	 * [1]: http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29
	 */
	ean: string;

	/**
	 * [International Standard Recording Code][1].
	 *
	 * [1]: http://en.wikipedia.org/wiki/International_Standard_Recording_Code.
	 */
	isrc: string;

	/**
	 * [Universal Product Code][1].
	 *
	 * [1]: http://en.wikipedia.org/wiki/Universal_Product_Code
	 */
	upc: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-externalurlobject|Objects Index}
 */
export interface ExternalURL {
	/**
	 * The [Spotify URL][1] for the object.
	 *
	 * [1]: https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids
	 */
	spotify: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-imageobject|Objects Index}
 */
export interface Image {
	/**
	 * The image height in pixels. If unknown: `null` or not returned.
	 */
	height?: Nullable<number>;

	/**
	 * The source URL of the image.
	 */
	url: string;

	/**
	 * The image width in pixels. If unknown: null or not returned.
	 */
	width?: Nullable<number>;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject|Objects Index}
 */
export interface Paging<T> extends Omit<CursorPaging<T>, 'cursors'> {
	offset: number;
	previous: Nullable<string>;
	total: number;
}

/**
 * @remarks
 * Additional reasons may be added in the future.
 *
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-albumrestrictionobject|Objects Index}
 */
export enum RestrictionReason {
	/**
	 * The content item is not available in the given market.
	 */
	Market = 'market',

	/**
	 * The content item is not available for the user’s subscription type.
	 */
	Product = 'product',

	/**
	 * The content item is explicit and the user’s account is set to not play explicit content.
	 */
	Explicit = 'explicit'
}
