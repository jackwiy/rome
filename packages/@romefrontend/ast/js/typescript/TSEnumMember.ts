/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	AnyJSExpression,
	JSIdentifier,
	JSStringLiteral,
	NodeBaseWithComments,
} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface TSEnumMember extends NodeBaseWithComments {
	type: "TSEnumMember";
	id: JSStringLiteral | JSIdentifier;
	initializer?: AnyJSExpression;
}

export const tsEnumMember = createBuilder<TSEnumMember>(
	"TSEnumMember",
	{
		bindingKeys: {},
		visitorKeys: {
			id: true,
			initializer: true,
		},
	},
);
