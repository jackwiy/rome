# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0191`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0191/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0191/input.js"
		end: Object {
			column: 0
			index: 42
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
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						"eval"
						RAW_MARKUP {value: " is a reserved word"}
					]
				}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0191/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 38
					index: 38
					line: 1
				}
				start: Object {
					column: 34
					index: 34
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0191/input.js"
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
				filename: "esprima/invalid-syntax/migrated_0191/input.js"
				end: Object {
					column: 41
					index: 41
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
					filename: "esprima/invalid-syntax/migrated_0191/input.js"
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
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0191/input.js"
					end: Object {
						column: 41
						index: 41
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0191/input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
				]
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0191/input.js"
							end: Object {
								column: 39
								index: 39
								line: 1
							}
							start: Object {
								column: 32
								index: 32
								line: 1
							}
						}
						expression: JSUpdateExpression {
							operator: "++"
							prefix: true
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0191/input.js"
								end: Object {
									column: 38
									index: 38
									line: 1
								}
								start: Object {
									column: 32
									index: 32
									line: 1
								}
							}
							argument: JSReferenceIdentifier {
								name: "eval"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0191/input.js"
									identifierName: "eval"
									end: Object {
										column: 38
										index: 38
										line: 1
									}
									start: Object {
										column: 34
										index: 34
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

 esprima/invalid-syntax/migrated_0191/input.js:1:34 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function hello() {'use strict'; ++eval; }
                                      ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
