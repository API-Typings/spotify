import { RangeOf } from '@api-typings/core';
import { AlbumType, Content, Followers } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedartistobject|Objects Index}
 */
export interface SimplifiedArtist extends Omit<Content, 'external_ids'> {
	/**
	 * The object type; always `artist`.
	 */
	type: 'artist';
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-artistobject|Object Index}
 */
export interface Artist extends SimplifiedArtist {
	/**
	 * Information about the followers of the artist.
	 */
	followers: Followers;

	/**
	 * A list of the genres the artist is associated with. If not yet classified, the array is
	 * empty.
	 */
	genres: string[] | [];

	/**
	 * The popularity of the artist. The value will be between `0` and `100`, with `100` being the
	 * most popular. The artist's popularity is calculated from the popularity of all the artist's
	 * tracks.
	 */
	popularity: RangeOf<0, 100>;
}

// SECTION Endpoints

/**
 * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
 */
export interface GetMultipleArtists {
	/**
	 * A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
	 */
	ids: string;
}

/**
 * Get Spotify catalog information about an artist's top tracks by country.
 */
export interface GetArtistsTopTracks {
	/**
	 * An [ISO 3166-1 alpha-2 country code][1] or the string `from_token`. Synonym for `country`.
	 *
	 * [1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	 */
	market: string;
}

/**
 * Get Spotify catalog information about an artist’s albums.
 */
export interface GetArtistsAlbums {
	/**
	 * A comma-separated list of keywords that will be used to filter the response. If not
	 * supplied, all album types will be returned.
	 */
	include_groups?: AlbumType | 'appears_on';

	/**
	 * Synonym for `country`. An [ISO 3166-1 alpha-2 country code][1] or the string `from_token`.
	 *
	 * @remarks
	 * Supply this parameter to limit the response to one particular geographical market. If not
	 * given, results will be returned for all markets and you are likely to get duplicate results
	 * per album, one for each market in which the album is available.
	 *
	 * [1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	 */
	market?: string;

	/**
	 * The number of album objects to return.
	 */
	limit?: RangeOf<1, 50>;

	/**
	 * The index of the first album to return.
	 *
	 * @defaultValue 0
	 */
	offset?: number;
}

// !SECTION
