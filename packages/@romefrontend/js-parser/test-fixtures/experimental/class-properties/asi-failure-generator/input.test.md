# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-properties > asi-failure-generator`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "experimental/class-properties/asi-failure-generator/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/class-properties/asi-failure-generator/input.js"
		end: Object {
			column: 0
			index: 33
			line: 5
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
				filename: "experimental/class-properties/asi-failure-generator/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 7
					index: 27
					line: 3
				}
				start: Object {
					column: 8
					index: 28
					line: 3
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "experimental/class-properties/asi-failure-generator/input.js"
					identifierName: "Foo"
					end: Object {
						column: 9
						index: 9
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
				filename: "experimental/class-properties/asi-failure-generator/input.js"
				end: Object {
					column: 10
					index: 30
					line: 3
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
					filename: "experimental/class-properties/asi-failure-generator/input.js"
					end: Object {
						column: 10
						index: 30
						line: 3
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "p"
								loc: Object {
									filename: "experimental/class-properties/asi-failure-generator/input.js"
									identifierName: "p"
									end: Object {
										column: 3
										index: 15
										line: 2
									}
									start: Object {
										column: 2
										index: 14
										line: 2
									}
								}
							}
							loc: Object {
								filename: "experimental/class-properties/asi-failure-generator/input.js"
								end: Object {
									column: 3
									index: 15
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
						value: JSBinaryExpression {
							operator: "*"
							loc: Object {
								filename: "experimental/class-properties/asi-failure-generator/input.js"
								end: Object {
									column: 7
									index: 27
									line: 3
								}
								start: Object {
									column: 6
									index: 18
									line: 2
								}
							}
							left: JSReferenceIdentifier {
								name: "x"
								loc: Object {
									filename: "experimental/class-properties/asi-failure-generator/input.js"
									identifierName: "x"
									end: Object {
										column: 7
										index: 19
										line: 2
									}
									start: Object {
										column: 6
										index: 18
										line: 2
									}
								}
							}
							right: JSCallExpression {
								arguments: Array []
								loc: Object {
									filename: "experimental/class-properties/asi-failure-generator/input.js"
									end: Object {
										column: 7
										index: 27
										line: 3
									}
									start: Object {
										column: 3
										index: 23
										line: 3
									}
								}
								callee: JSReferenceIdentifier {
									name: "m"
									loc: Object {
										filename: "experimental/class-properties/asi-failure-generator/input.js"
										identifierName: "m"
										end: Object {
											column: 4
											index: 24
											line: 3
										}
										start: Object {
											column: 3
											index: 23
											line: 3
										}
									}
								}
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "experimental/class-properties/asi-failure-generator/input.js"
							end: Object {
								column: 7
								index: 27
								line: 3
							}
							start: Object {
								column: 2
								index: 14
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 14
								line: 2
							}
							loc: Object {
								filename: "experimental/class-properties/asi-failure-generator/input.js"
								end: Object {
									column: 3
									index: 15
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
					}
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: ""
								loc: Object {
									filename: "experimental/class-properties/asi-failure-generator/input.js"
									identifierName: ""
									end: Object {
										column: 9
										index: 29
										line: 3
									}
									start: Object {
										column: 8
										index: 28
										line: 3
									}
								}
							}
							loc: Object {
								filename: "experimental/class-properties/asi-failure-generator/input.js"
								end: Object {
									column: 9
									index: 29
									line: 3
								}
								start: Object {
									column: 8
									index: 28
									line: 3
								}
							}
						}
						value: undefined
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "experimental/class-properties/asi-failure-generator/input.js"
							end: Object {
								column: 9
								index: 29
								line: 3
							}
							start: Object {
								column: 8
								index: 28
								line: 3
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 8
								index: 28
								line: 3
							}
							loc: Object {
								filename: "experimental/class-properties/asi-failure-generator/input.js"
								end: Object {
									column: 9
									index: 29
									line: 3
								}
								start: Object {
									column: 8
									index: 28
									line: 3
								}
							}
						}
					}
				]
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "experimental/class-properties/asi-failure-generator/input.js"
				end: Object {
					column: 1
					index: 32
					line: 4
				}
				start: Object {
					column: 0
					index: 31
					line: 4
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "experimental/class-properties/asi-failure-generator/input.js"
					end: Object {
						column: 1
						index: 32
						line: 4
					}
					start: Object {
						column: 0
						index: 31
						line: 4
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/class-properties/asi-failure-generator/input.js:3:8 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    1 │ class Foo {
    2 │   p = x
  > 3 │   *m () {}
      │         ^
    4 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
