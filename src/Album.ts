import { RangeOf } from '@api-typings/core';
import { Artist, Content, Copyright, DatePrecision, RestrictionReason, SimplifiedArtist, Track } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject|Object Index}
 */
export interface SimplifiedAlbum<T = SimplifiedArtist> extends Omit<Content, 'external_ids'> {
	/**
	 * The field is present when getting an artist's albums. Compared to `album_type`, this field
	 * represents relationship between the artist and the album.
	 */
	album_group?: AlbumType | 'appears_on';

	/**
	 * The type of the album.
	 */
	album_type: AlbumType;

	/**
	 * The artists of the album. Each artist object includes a link in `href` to more detailed
	 * information about the artist.
	 */
	artists: T[];

	/**
	 * The markets in which the album is available: [ISO 3166-1 alpha-2 country codes][1]. An album
	 * is considered available in a market when at least 1 of its tracks is available in that
	 * market.
	 *
	 * [1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	 */
	avaliable_markets: string[];

	/**
	 * The date the album was first released. Depending on the `release_date_precision`, it might
	 * be shown as `YYYY` or `YYYY-MM` instead of `YYYY-MM-DD`.
	 */
	release_date: string;

	/**
	 * The precision with which `release_date` value is known.
	 */
	release_date_precision: DatePrecision;

	/**
	 * Included in the response when a content restriction is applied.
	 */
	restrictions?: RestrictionReason;

	/**
	 * The object type; always `album`.
	 */
	type: 'album';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-albumobject|Objects Index}
 */
export interface Album extends SimplifiedAlbum<Artist> {
	/**
	 * The copyright statements of the album.
	 */
	copyrights: Copyright[];

	/**
	 * A list of the genres used to classify the album. If not yet classified, the array is empty.
	 */
	genres: string[] | [];

	/**
	 * The label for the album.
	 */
	label: string;

	/**
	 * The popularity of the album. The value will be between `0` and `100`, with `100` being the
	 * most popular. The popularity is calculated from the popularity of the album's individual
	 * tracks.
	 */
	popularity: RangeOf<0, 100>;

	/**
	 * The tracks of the album.
	 */
	tracks: Track;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-albumrestrictionobject|Objects Index}
 */
export interface AlbumRestriction {
	/**
	 * The reason for the restriction.
	 */
	reason: RestrictionReason;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject|Objects Index}
 */
export interface SavedAlbum {
	/**
	 * The date and time the album was saved.
	 *
	 * @remarks
	 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero
	 * offset: `YYYY-MM-DDTHH:MM:SSZ`. If the time is imprecise, an additional field indicates the
	 * precision.
	 */
	added_at: string;

	/**
	 * Information about the album.
	 */
	album: Album;
}

export type AlbumType = 'album' | 'single' | 'compilation';

// SECTION Endpoints

export interface GetMultipleAlbums {
	/**
	 * A comma-separated list of the [Spotify IDs][1] for the albums. Maximum: 20 IDs.
	 *
	 * [1]: https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids
	 */
	ids: string;

	/**
	 * An [ISO 3166-1 alpha-2 country code][1] or the string `from_token`. Provide this parameter
	 * if you want to apply [Track Relinking][2].
	 *
	 * [1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	 * [2]: https://developer.spotify.com/documentation/general/guides/track-relinking-guide/
	 */
	market?: string | 'from_token';
}

export interface GetAlbum {
	/**
	 * The market you'd like to request. Synonym for `country`.
	 */
	market?: string;
}

export interface GetAlbumTracks {
	/**
	 * An [ISO 3166-1 alpha-2 country code][1] or the string `from_token`. Provide this parameter
	 * if you want to apply [Track Relinking][2].
	 *
	 * [1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	 * [2]: https://developer.spotify.com/documentation/general/guides/track-relinking-guide/
	 */
	market?: string | 'from_token';

	/**
	 * The maximum number of tracks to return.
	 *
	 * @defaultValue 50
	 */
	limit?: RangeOf<1, 50>;

	/**
	 * The index of the first track to return. Use with `limit` to get the next set of tracks.
	 *
	 * @defaultValue 0
	 */
	offset?: number;
}

// !SECTION
