import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface MarkdownCodeInline extends NodeBaseWithComments {
	type: "MarkdownCodeInline";
	value: string;
}

export const markdownCodeInline = createBuilder<MarkdownCodeInline>(
	"MarkdownCodeInline",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
