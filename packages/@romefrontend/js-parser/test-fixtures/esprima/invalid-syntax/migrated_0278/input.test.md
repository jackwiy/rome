# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0278`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0278/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0278/input.js"
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
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						"static"
						RAW_MARKUP {value: " is a reserved word"}
					]
				}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0278/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 17
					index: 17
					line: 1
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0278/input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0278/input.js"
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
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0278/input.js"
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
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSComputedPropertyKey {
							value: JSReferenceIdentifier {
								name: "static"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0278/input.js"
									identifierName: "static"
									end: Object {
										column: 23
										index: 23
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
								filename: "esprima/invalid-syntax/migrated_0278/input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0278/input.js"
							end: Object {
								column: 28
								index: 28
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0278/input.js"
								end: Object {
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 26
									index: 26
									line: 1
								}
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
								filename: "esprima/invalid-syntax/migrated_0278/input.js"
								end: Object {
									column: 26
									index: 26
									line: 1
								}
								start: Object {
									column: 24
									index: 24
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							start: Object {
								column: 9
								index: 9
								line: 1
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0278/input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 9
									index: 9
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

 esprima/invalid-syntax/migrated_0278/input.js:1:17 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ static is a reserved word

    class A {static [static](){};}
                     ^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
