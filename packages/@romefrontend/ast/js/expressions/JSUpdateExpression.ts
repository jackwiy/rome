/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface JSUpdateExpression extends NodeBaseWithComments {
	type: "JSUpdateExpression";
	operator: UpdateOperator;
	argument: AnyJSExpression;
	prefix?: boolean;
}

export type UpdateOperator = "++" | "--";

export const jsUpdateExpression = createBuilder<JSUpdateExpression>(
	"JSUpdateExpression",
	{
		bindingKeys: {},
		visitorKeys: {
			argument: true,
		},
	},
);
