# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0027`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/expression-primary-object/migrated_0027/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/expression-primary-object/migrated_0027/input.js"
		end: Object {
			column: 21
			index: 21
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/expression-primary-object/migrated_0027/input.js"
				end: Object {
					column: 21
					index: 21
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "esprima/expression-primary-object/migrated_0027/input.js"
					end: Object {
						column: 21
						index: 21
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "x"
					loc: Object {
						filename: "esprima/expression-primary-object/migrated_0027/input.js"
						identifierName: "x"
						end: Object {
							column: 1
							index: 1
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				right: JSObjectExpression {
					loc: Object {
						filename: "esprima/expression-primary-object/migrated_0027/input.js"
						end: Object {
							column: 21
							index: 21
							line: 1
						}
						start: Object {
							column: 4
							index: 4
							line: 1
						}
					}
					properties: Array [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSStringLiteral {
									value: "__proto__"
									loc: Object {
										filename: "esprima/expression-primary-object/migrated_0027/input.js"
										end: Object {
											column: 16
											index: 16
											line: 1
										}
										start: Object {
											column: 5
											index: 5
											line: 1
										}
									}
								}
								loc: Object {
									filename: "esprima/expression-primary-object/migrated_0027/input.js"
									end: Object {
										column: 16
										index: 16
										line: 1
									}
									start: Object {
										column: 5
										index: 5
										line: 1
									}
								}
							}
							value: JSNumericLiteral {
								value: 2
								format: undefined
								loc: Object {
									filename: "esprima/expression-primary-object/migrated_0027/input.js"
									end: Object {
										column: 19
										index: 19
										line: 1
									}
									start: Object {
										column: 18
										index: 18
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/expression-primary-object/migrated_0027/input.js"
								end: Object {
									column: 19
									index: 19
									line: 1
								}
								start: Object {
									column: 5
									index: 5
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
