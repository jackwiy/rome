# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-identifier > invalid_expression_await`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
		end: Object {
			column: 0
			index: 31
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			location: Object {
				filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			description: Object {
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "<emphasis>import</emphasis> and <emphasis>export</emphasis> can only appear in a module"}]}
				advice: Array [
					log {
						category: "info"
						text: MARKUP {parts: Array [RAW_MARKUP {value: "Change the extension to <emphasis>.mjs</emphasis> to turn this file into a module"}]}
					}
					log {
						category: "info"
						text: MARKUP {
							parts: Array [
								RAW_MARKUP {value: "Add <emphasis>\"type\": \"module\"</emphasis> to your <filelink emphasis target=\""}
								undefined
								RAW_MARKUP {value: "\" />"}
							]
						}
					}
				]
			}
		}
	]
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclarationStatement {
				loc: Object {
					filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
					end: Object {
						column: 30
						index: 30
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				declaration: JSVariableDeclaration {
					kind: "var"
					loc: Object {
						filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
						end: Object {
							column: 30
							index: 30
							line: 1
						}
						start: Object {
							column: 7
							index: 7
							line: 1
						}
					}
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "answer"
								loc: Object {
									filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
									identifierName: "answer"
									end: Object {
										column: 17
										index: 17
										line: 1
									}
									start: Object {
										column: 11
										index: 11
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
								end: Object {
									column: 29
									index: 29
									line: 1
								}
								start: Object {
									column: 11
									index: 11
									line: 1
								}
							}
							init: JSBinaryExpression {
								operator: "+"
								loc: Object {
									filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
									end: Object {
										column: 29
										index: 29
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
								left: JSReferenceIdentifier {
									name: "await"
									loc: Object {
										filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
										identifierName: "await"
										end: Object {
											column: 25
											index: 25
											line: 1
										}
										start: Object {
											column: 20
											index: 20
											line: 1
										}
									}
								}
								right: JSNumericLiteral {
									value: 1
									format: undefined
									loc: Object {
										filename: "esprima/es2015-identifier/invalid_expression_await/input.js"
										end: Object {
											column: 29
											index: 29
											line: 1
										}
										start: Object {
											column: 28
											index: 28
											line: 1
										}
									}
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

 esprima/es2015-identifier/invalid_expression_await/input.js:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ import and export can only appear in a module

    export var answer = await + 1;
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Change the extension to .mjs to turn this file into a module

  ℹ Add "type": "module" to your undefined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
