# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > property-optional-definite-assignment-not-allowed`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
		end: Object {
			column: 0
			index: 27
			line: 4
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
				filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 4
					index: 14
					line: 2
				}
				start: Object {
					column: 4
					index: 14
					line: 2
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: Object {
					filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
					identifierName: "C"
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
				filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
				end: Object {
					column: 1
					index: 26
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
					filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
					end: Object {
						column: 1
						index: 26
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
								name: "x"
								loc: Object {
									filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
									identifierName: "x"
									end: Object {
										column: 3
										index: 13
										line: 2
									}
									start: Object {
										column: 2
										index: 12
										line: 2
									}
								}
							}
							loc: Object {
								filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
								end: Object {
									column: 3
									index: 13
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						value: undefined
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
							end: Object {
								column: 4
								index: 14
								line: 2
							}
							start: Object {
								column: 2
								index: 12
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: true
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 12
								line: 2
							}
							loc: Object {
								filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
								end: Object {
									column: 4
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 12
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
									filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
									identifierName: ""
									end: Object {
										column: 5
										index: 15
										line: 2
									}
									start: Object {
										column: 4
										index: 14
										line: 2
									}
								}
							}
							loc: Object {
								filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
								end: Object {
									column: 5
									index: 15
									line: 2
								}
								start: Object {
									column: 4
									index: 14
									line: 2
								}
							}
						}
						value: undefined
						definite: undefined
						loc: Object {
							filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
							end: Object {
								column: 14
								index: 24
								line: 2
							}
							start: Object {
								column: 4
								index: 14
								line: 2
							}
						}
						typeAnnotation: TSNumberKeywordTypeAnnotation {
							loc: Object {
								filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
								end: Object {
									column: 13
									index: 23
									line: 2
								}
								start: Object {
									column: 7
									index: 17
									line: 2
								}
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
								column: 4
								index: 14
								line: 2
							}
							loc: Object {
								filename: "typescript/class/property-optional-definite-assignment-not-allowed/input.ts"
								end: Object {
									column: 5
									index: 15
									line: 2
								}
								start: Object {
									column: 4
									index: 14
									line: 2
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

 typescript/class/property-optional-definite-assignment-not-allowed/input.ts:2:4 parse/js ━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    1 │ class C {
  > 2 │   x?!: number;
      │     ^
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
