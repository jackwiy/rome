# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > invalid-parens-async-func`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2017/async-functions/invalid-parens-async-func/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/invalid-parens-async-func/input.js"
		end: Object {
			column: 0
			index: 26
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Expected a semicolon or a line terminator"}]}
			}
			location: Object {
				filename: "es2017/async-functions/invalid-parens-async-func/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 8
					index: 8
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/invalid-parens-async-func/input.js"
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "async"
				loc: Object {
					filename: "es2017/async-functions/invalid-parens-async-func/input.js"
					identifierName: "async"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
			}
		}
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "x"
				loc: Object {
					filename: "es2017/async-functions/invalid-parens-async-func/input.js"
					identifierName: "x"
					end: Object {
						column: 18
						index: 18
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
			}
			loc: Object {
				filename: "es2017/async-functions/invalid-parens-async-func/input.js"
				end: Object {
					column: 25
					index: 25
					line: 1
				}
				start: Object {
					column: 8
					index: 8
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "es2017/async-functions/invalid-parens-async-func/input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 23
						index: 23
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "es2017/async-functions/invalid-parens-async-func/input.js"
					end: Object {
						column: 22
						index: 22
						line: 1
					}
					start: Object {
						column: 19
						index: 19
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "a"
						loc: Object {
							filename: "es2017/async-functions/invalid-parens-async-func/input.js"
							identifierName: "a"
							end: Object {
								column: 21
								index: 21
								line: 1
							}
							start: Object {
								column: 20
								index: 20
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "es2017/async-functions/invalid-parens-async-func/input.js"
								end: Object {
									column: 21
									index: 21
									line: 1
								}
								start: Object {
									column: 20
									index: 20
									line: 1
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

 es2017/async-functions/invalid-parens-async-func/input.js:1:8 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    (async) function x (a) {}
            ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
