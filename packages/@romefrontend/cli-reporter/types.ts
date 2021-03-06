/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Event} from "@romefrontend/events";
import {TerminalFeatures} from "@romefrontend/cli-environment";
import {Markup} from "@romefrontend/cli-layout";

export type SelectOption = {
	label: Markup;
	shortcut?: string;
};

export type SelectOptionsKeys<Options extends SelectOptions> = Extract<
	keyof Options,
	string
>;

export type SelectOptions = {
	[key: string]: undefined | SelectOption;
};

export type SelectArguments<Options extends SelectOptions> = {
	options: Options;
	defaults?: Array<SelectOptionsKeys<Options>>;
	radio?: boolean;
	yes?: boolean;
};

export type Package = {
	name: string;
	version?: string;
};

export type ReporterStreamMeta = {
	type: "out" | "error" | "all";
	features: TerminalFeatures;
	format: "markup" | "ansi" | "html" | "none";
};

export type ReporterConditionalStream = {
	update: () => boolean;
};

export type ReporterStream = ReporterStreamMeta & {
	write: (chunk: string) => void;
	init?: () => void;
	teardown?: () => void;
};

export type ReporterDerivedStreams = {
	stdoutWrite: (chunk: string) => void;
	stderrWrite: (chunk: string) => void;
	format: ReporterStream["format"];
	features: TerminalFeatures;
	featuresUpdated: Event<TerminalFeatures, void>;
};

export type ReporterProgressOptions = {
	name?: string;
	title?: Markup;
	initDelay?: number;
	elapsed?: boolean;
	eta?: boolean;
	persistent?: boolean;
};

export type ReporterProgress = {
	render: () => void;
	setCurrent: (current: number) => void;
	setTotal: (total: number, approximate?: boolean) => void;
	setText: (text: Markup) => void;
	pushText: (text: Markup, id?: string) => string;
	popText: (id: string) => void;
	setApproximateETA: (duration: number) => void;
	tick: () => void;
	end: () => void;
	pause: () => void;
	resume: () => void;
};

export type RemoteReporterReceiveMessage = {
	type: "ENDED";
	id: string;
};

export type RemoteReporterClientMessage =
	| {
			type: "PROGRESS_CREATE";
			id: string;
			opts: undefined | ReporterProgressOptions;
		}
	| {
			type: "PROGRESS_SET_CURRENT";
			current: number;
			id: string;
		}
	| {
			type: "PROGRESS_SET_APPROXIMATE_ETA";
			duration: number;
			id: string;
		}
	| {
			type: "PROGRESS_SET_TOTAL";
			total: number;
			id: string;
			approximate: boolean;
		}
	| {
			type: "PROGRESS_SET_TEXT";
			text: Markup;
			id: string;
		}
	| {
			type: "PROGRESS_PUSH_TEXT";
			text: Markup;
			textId: string;
			id: string;
		}
	| {
			type: "PROGRESS_POP_TEXT";
			textId: string;
			id: string;
		}
	| {
			type: "PROGRESS_TICK";
			id: string;
		}
	| {
			type: "PROGRESS_END";
			id: string;
		}
	| {
			type: "PROGRESS_PAUSE";
			id: string;
		}
	| {
			type: "PROGRESS_RESUME";
			id: string;
		};
