# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-arrow-expression-disallowed`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
		end: Object {
			column: 17
			index: 17
			line: 1
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
				filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
				end: Object {
					column: 17
					index: 17
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
					end: Object {
						column: 17
						index: 17
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
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
						end: Object {
							column: 5
							index: 5
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
						end: Object {
							column: 17
							index: 17
							line: 1
						}
						start: Object {
							column: 6
							index: 6
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
								end: Object {
									column: 13
									index: 13
									line: 1
								}
								start: Object {
									column: 8
									index: 8
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "await"
								loc: Object {
									filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
									identifierName: "await"
									end: Object {
										column: 13
										index: 13
										line: 1
									}
									start: Object {
										column: 8
										index: 8
										line: 1
									}
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
								end: Object {
									column: 15
									index: 15
									line: 1
								}
								start: Object {
									column: 14
									index: 14
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "x"
								loc: Object {
									filename: "es2017/async-functions/await-inside-arrow-expression-disallowed/input.js"
									identifierName: "x"
									end: Object {
										column: 15
										index: 15
										line: 1
									}
									start: Object {
										column: 14
										index: 14
										line: 1
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

 es2017/async-functions/await-inside-arrow-expression-disallowed/input.js:1:14 parse/js ━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    () => { await x }
                  ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
