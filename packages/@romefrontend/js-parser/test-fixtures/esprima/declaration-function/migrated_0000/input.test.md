# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > declaration-function > migrated_0000`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/declaration-function/migrated_0000/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/declaration-function/migrated_0000/input.js"
		end: Object {
			column: 0
			index: 30
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: Object {
					filename: "esprima/declaration-function/migrated_0000/input.js"
					identifierName: "hello"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "esprima/declaration-function/migrated_0000/input.js"
				end: Object {
					column: 29
					index: 29
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/declaration-function/migrated_0000/input.js"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "esprima/declaration-function/migrated_0000/input.js"
					end: Object {
						column: 29
						index: 29
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "esprima/declaration-function/migrated_0000/input.js"
							end: Object {
								column: 27
								index: 27
								line: 1
							}
							start: Object {
								column: 19
								index: 19
								line: 1
							}
						}
						expression: JSCallExpression {
							arguments: Array []
							loc: Object {
								filename: "esprima/declaration-function/migrated_0000/input.js"
								end: Object {
									column: 26
									index: 26
									line: 1
								}
								start: Object {
									column: 19
									index: 19
									line: 1
								}
							}
							callee: JSReferenceIdentifier {
								name: "sayHi"
								loc: Object {
									filename: "esprima/declaration-function/migrated_0000/input.js"
									identifierName: "sayHi"
									end: Object {
										column: 24
										index: 24
										line: 1
									}
									start: Object {
										column: 19
										index: 19
										line: 1
									}
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
