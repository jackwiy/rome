/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Path} from "@romefrontend/compiler";
import {TransformExitResult} from "@romefrontend/compiler/types";
import {AnyNode} from "@romefrontend/ast";
import {descriptions} from "@romefrontend/diagnostics";

function isEmpty(node: AnyNode): boolean {
	if (node.innerComments !== undefined && node.innerComments.length > 0) {
		return false;
	}

	if (node.type === "JSEmptyStatement") {
		return true;
	}

	if (node.type === "JSBlockStatement" && node.body.length === 0) {
		return true;
	}

	return false;
}

export default {
	name: "js/emptyBlocks",
	enter(path: Path): TransformExitResult {
		const {node, context} = path;

		if (node.type === "JSIfStatement") {
			if (isEmpty(node.consequent)) {
				context.addNodeDiagnostic(
					node.consequent,
					descriptions.LINT.JS_EMPTY_BLOCKS,
				);
			}

			if (node.alternate !== undefined && isEmpty(node.alternate)) {
				context.addNodeDiagnostic(
					node.alternate,
					descriptions.LINT.JS_EMPTY_BLOCKS,
				);
			}
		}

		return node;
	},
};
