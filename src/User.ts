import { Nullable, RangeOf } from '@api-typings/core';
import { Content, Followers } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject|Objects Index}
 */
export interface PrivateUser extends PublicUser {
	country: string;
	email: string;
	explicit_content: ExplicitContentSettings;
	followers: Followers;
	product: SubscriptionLevel;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-explicitcontentsettingsobject|Objects Index}
 */
export interface ExplicitContentSettings {
	/**
	 * When `true`, indicates that explicit content should not be played.
	 */
	filter_enabled: boolean;

	/**
	 * When `true`, indicates that the explicit content setting is locked and can’t be changed by
	 * the user.
	 */
	filter_locked: boolean;
}

export type SubscriptionLevel = 'premium' | 'free' | 'open';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject|Objects Index}
 */
export interface PublicUser extends Omit<Content, 'external_ids' | 'name'> {
	display_name: Nullable<string>;

	/**
	 * The object type; always `user`.
	 */
	type: 'user';
}

// SECTION Endpoints

// ANCHOR Personaliation

/**
 * Get the current user’s top artists or tracks based on calculated affinity.
 */
export interface GetUserTopArtistsTracks {
	time_range?: string;
	limit?: RangeOf<1, 50>;
	offset?: number;
}

// !SECTION
