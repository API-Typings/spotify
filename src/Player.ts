import { Nullable, RangeOf } from '@api-typings/core';
import { Episode, ExternalURL, SimplifiedTrack, Track } from './';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-contextobject|Objects Index}
 */
export interface Context {
	external_urls: ExternalURL;
	href: string;
	type: string;
	uri: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject|Objects Index}
 */
export interface CurrentlyPlayingContext extends CurrentlyPlaying {
	actions: Disallows;
	device: Device;
	repeat_state: RepeatState;
	shuffle_state: string;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject|Objects Index}
 */
export interface CurrentlyPlaying {
	context: Nullable<Context>;
	current_playing_type: CurrentlyPlayingType;
	is_playing: boolean;
	item: Nullable<Track | Episode>;
	progress_ms: Nullable<number>;
	timestamp: number;
}

export type CurrentlyPlayingType = 'track' | 'episode' | 'ad' | 'unknown';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject|Objects Index}
 */
export interface Device {
	id: Nullable<string>;
	is_active: boolean;
	name: string;
	is_private_session: boolean;
	is_restricted: boolean;
	type: DeviceType;
	volume_percent: Nullable<number>;
}

export type DeviceType = 'computer' | 'smartphone' | 'speaker';

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-devicesobject|Objects Index}
 */
export interface Devices {
	/**
	 * A list of `0..n` Device objects.
	 */
	devices: Device[];
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-disallowsobject|Objects Index}
 */
export interface Disallows {
	/**
	 * Interrupting playback.
	 */
	interrupting_playback?: boolean;

	/**
	 * Pausing.
	 */
	pausing?: boolean;

	/**
	 * Resuming.
	 */
	resuming?: boolean;

	/**
	 * Seeking playback location.
	 */
	seeking?: boolean;

	/**
	 * Skipping to the next context.
	 */
	skipping_next?: boolean;
	/**
	 * Skipping to the previous context.
	 */
	skipping_prev?: boolean;

	/**
	 * Toggling repeat context flag.
	 */
	toggling_repeat_context?: boolean;

	/**
	 * Toggling repeat track flag.
	 */
	toggling_repeat_track?: boolean;

	/**
	 * Toggling shuffle flag.
	 */
	toggling_shuffle?: boolean;

	/**
	 * Transferring playback between devices.
	 */
	transferring_playback?: boolean;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-playhistoryobject|Objects Index}
 */
export interface PlayHistory {
	/**
	 * The context the track was played from.
	 */
	context: Context;

	/**
	 * The date and time the track was played.
	 */
	played_at: string;

	/**
	 * The track the user listened to.
	 */
	track: SimplifiedTrack;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-playererrorobject|Objects Index}
 */
export interface PlayerError {
	/**
	 * A short description of the cause of the error.
	 */
	message: string;

	/**
	 * The reason of the error.
	 */
	reason: PlayerErrorReason;

	/**
	 * The HTTP status code. Either `404 NOT FOUND` or `402 FORBIDDEN`. Also returned in the
	 * response header.
	 */
	status: 404 | 403;
}

/**
 * @source {@link https://developer.spotify.com/documentation/web-api/reference/#object-playererrorobject|Objects Index}
 */
export enum PlayerErrorReason {
	/**
	 * The command requires a previous track, but there is none in the context.
	 */
	NoPreviousTrack = 'NO_PREV_TRACK',

	/**
	 * The command requires a next track, but there is none in the context.
	 */
	NoNextTrack = 'NO_NEXT_TRACK',

	/**
	 * The requested track does not exist.
	 */
	NoSpecificTrack = 'NO_SPECIFIC_TRACK',

	/**
	 * The command requires playback to not be paused.
	 */
	AlreadyPaused = 'ALREADY_PAUSED',

	/**
	 * The command requires playback to be paused.
	 */
	NotPaused = 'NOT_PAUSED',

	/**
	 * The command requires playback on the local device.
	 */
	NotPlayingLocally = 'NOT_PLAYING_LOCALLY',

	/**
	 * The command requires that a track is currently playing.
	 */
	NotPlayingTrack = 'NOT_PLAYING_TRACK',

	/**
	 * The command requires that a context is currently playing.
	 */
	NotPlayingContext = 'NOT_PLAYING_CONTEXT',

	/**
	 * The shuffle command cannot be applied on an endless context.
	 */
	EndlessContext = 'ENDLESS_CONTEXT',

	/**
	 * The command could not be performed on the context.
	 */
	ContextDisallow = 'CONTEXT_DISALLOW',

	/**
	 * The track should not be restarted if the same track and context is already playing, and
	 * there is a resume point.
	 */
	AlreadyPlaying = 'ALREADY_PLAYING',

	/**
	 * The user is rate limited due to too frequent track play.
	 */
	RateLimited = 'RATE_LIMITED',

	/**
	 * The context cannot be remote-controlled.
	 */
	RemoteControlDisallow = 'REMOTE_CONTROL_DISALLOW',

	/**
	 * Not possible to remote control the device.
	 */
	DeviceUncontrollable = 'DEVICE_NOT_CONTROLLABLE',

	/**
	 * Not possible to remote control the device's volume.
	 */
	VolumeControlDisallow = 'VOLUME_CONTROL_DISALLOW',

	/**
	 * Requires an active device and the user has none.
	 */
	NoActiveDevice = 'NO_ACTIVE_DEVICE',

	/**
	 * The request is prohibited for non-premium users.
	 */
	PremiumRequired = 'PREMIUM_REQUIRED',

	/**
	 * Certain actions are restricted because of unknown reasons.
	 */
	Unknown = 'UNKNOWN'
}

export type RepeatState = 'track' | 'context' | 'off';

// SECTION Endpoints

export interface GetCurrentPlaybackInformation {
	market?: string;
	additional_types?: string;
}

export interface TransferPlayback {
	device_ids: string[];
	play?: boolean;
}

export interface GetCurrentlyPlaylingTrack {
	market?: string;
	additional_types?: string;
}

export interface ModifyPlaybackState {
	device_id?: string;
	context_uri?: string;
	uris: string[];
	offset?: PlaybackOffset;
	position_ms?: number;
}

export interface PlaybackOffset {
	position?: number;
}

export interface PausePlayback {
	device_id?: string;
}

export interface SkipPlaybackNext {
	device_id?: string;
}

export interface SkipPlaybackPrevious {
	device_id?: string;
}

export interface SeekPosition {
	position_ms: number;
	device_id?: string;
}

export interface SetRepeatMode {
	state: RepeatState;
	device_id?: string;
}

export interface SetVolume {
	volume_percent: RangeOf<0, 100>;
	device_id?: string;
}

export interface ToggleShuffle {
	state: boolean;
	device_id?: string;
}

export interface GetRecentlyPlayedTracks {
	limit?: RangeOf<0, 50>;
	after?: number;
	before?: number;
}

export interface AddItemToQueue {
	uri: string;
	device_id?: string;
}

// !SECTION
