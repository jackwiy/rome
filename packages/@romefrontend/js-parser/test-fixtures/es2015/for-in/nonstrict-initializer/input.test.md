# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > for-in > nonstrict-initializer`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/for-in/nonstrict-initializer/input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/for-in/nonstrict-initializer/input.js"
		end: Object {
			column: 0
			index: 145
			line: 7
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2015/for-in/nonstrict-initializer/input.js"
				end: Object {
					column: 18
					index: 18
					line: 1
				}
				start: Object {
					column: 2
					index: 2
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "es2015/for-in/nonstrict-initializer/input.js"
					end: Object {
						column: 18
						index: 18
						line: 1
					}
					start: Object {
						column: 2
						index: 2
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "effects"
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								identifierName: "effects"
								end: Object {
									column: 13
									index: 13
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
							filename: "es2015/for-in/nonstrict-initializer/input.js"
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
						init: JSNumericLiteral {
							value: 0
							format: undefined
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								end: Object {
									column: 17
									index: 17
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
						}
					}
				]
			}
		}
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2015/for-in/nonstrict-initializer/input.js"
				end: Object {
					column: 21
					index: 40
					line: 2
				}
				start: Object {
					column: 2
					index: 21
					line: 2
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "es2015/for-in/nonstrict-initializer/input.js"
					end: Object {
						column: 21
						index: 40
						line: 2
					}
					start: Object {
						column: 2
						index: 21
						line: 2
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "iterations"
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								identifierName: "iterations"
								end: Object {
									column: 16
									index: 35
									line: 2
								}
								start: Object {
									column: 6
									index: 25
									line: 2
								}
							}
						}
						loc: Object {
							filename: "es2015/for-in/nonstrict-initializer/input.js"
							end: Object {
								column: 20
								index: 39
								line: 2
							}
							start: Object {
								column: 6
								index: 25
								line: 2
							}
						}
						init: JSNumericLiteral {
							value: 0
							format: undefined
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								end: Object {
									column: 20
									index: 39
									line: 2
								}
								start: Object {
									column: 19
									index: 38
									line: 2
								}
							}
						}
					}
				]
			}
		}
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2015/for-in/nonstrict-initializer/input.js"
				end: Object {
					column: 13
					index: 54
					line: 3
				}
				start: Object {
					column: 2
					index: 43
					line: 3
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "es2015/for-in/nonstrict-initializer/input.js"
					end: Object {
						column: 13
						index: 54
						line: 3
					}
					start: Object {
						column: 2
						index: 43
						line: 3
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "stored"
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								identifierName: "stored"
								end: Object {
									column: 12
									index: 53
									line: 3
								}
								start: Object {
									column: 6
									index: 47
									line: 3
								}
							}
						}
						init: undefined
						loc: Object {
							filename: "es2015/for-in/nonstrict-initializer/input.js"
							end: Object {
								column: 12
								index: 53
								line: 3
							}
							start: Object {
								column: 6
								index: 47
								line: 3
							}
						}
					}
				]
			}
		}
		JSForInStatement {
			loc: Object {
				filename: "es2015/for-in/nonstrict-initializer/input.js"
				end: Object {
					column: 3
					index: 144
					line: 6
				}
				start: Object {
					column: 2
					index: 57
					line: 4
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "es2015/for-in/nonstrict-initializer/input.js"
					end: Object {
						column: 3
						index: 144
						line: 6
					}
					start: Object {
						column: 66
						index: 121
						line: 4
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "es2015/for-in/nonstrict-initializer/input.js"
							end: Object {
								column: 17
								index: 140
								line: 5
							}
							start: Object {
								column: 4
								index: 127
								line: 5
							}
						}
						expression: JSUpdateExpression {
							operator: "++"
							prefix: true
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								end: Object {
									column: 16
									index: 139
									line: 5
								}
								start: Object {
									column: 4
									index: 127
									line: 5
								}
							}
							argument: JSReferenceIdentifier {
								name: "iterations"
								loc: Object {
									filename: "es2015/for-in/nonstrict-initializer/input.js"
									identifierName: "iterations"
									end: Object {
										column: 16
										index: 139
										line: 5
									}
									start: Object {
										column: 6
										index: 129
										line: 5
									}
								}
							}
						}
					}
				]
			}
			left: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "es2015/for-in/nonstrict-initializer/input.js"
					end: Object {
						column: 30
						index: 85
						line: 4
					}
					start: Object {
						column: 7
						index: 62
						line: 4
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								identifierName: "a"
								end: Object {
									column: 12
									index: 67
									line: 4
								}
								start: Object {
									column: 11
									index: 66
									line: 4
								}
							}
						}
						loc: Object {
							filename: "es2015/for-in/nonstrict-initializer/input.js"
							end: Object {
								column: 30
								index: 85
								line: 4
							}
							start: Object {
								column: 11
								index: 66
								line: 4
							}
						}
						init: JSSequenceExpression {
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								end: Object {
									column: 29
									index: 84
									line: 4
								}
								start: Object {
									column: 16
									index: 71
									line: 4
								}
							}
							expressions: Array [
								JSUpdateExpression {
									operator: "++"
									prefix: true
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 25
											index: 80
											line: 4
										}
										start: Object {
											column: 16
											index: 71
											line: 4
										}
									}
									argument: JSReferenceIdentifier {
										name: "effects"
										loc: Object {
											filename: "es2015/for-in/nonstrict-initializer/input.js"
											identifierName: "effects"
											end: Object {
												column: 25
												index: 80
												line: 4
											}
											start: Object {
												column: 18
												index: 73
												line: 4
											}
										}
									}
								}
								JSUnaryExpression {
									operator: "-"
									prefix: true
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 29
											index: 84
											line: 4
										}
										start: Object {
											column: 27
											index: 82
											line: 4
										}
									}
									argument: JSNumericLiteral {
										value: 1
										format: undefined
										loc: Object {
											filename: "es2015/for-in/nonstrict-initializer/input.js"
											end: Object {
												column: 29
												index: 84
												line: 4
											}
											start: Object {
												column: 28
												index: 83
												line: 4
											}
										}
									}
								}
							]
						}
					}
				]
			}
			right: JSSequenceExpression {
				loc: Object {
					filename: "es2015/for-in/nonstrict-initializer/input.js"
					end: Object {
						column: 64
						index: 119
						line: 4
					}
					start: Object {
						column: 34
						index: 89
						line: 4
					}
				}
				expressions: Array [
					JSAssignmentExpression {
						operator: "="
						loc: Object {
							filename: "es2015/for-in/nonstrict-initializer/input.js"
							end: Object {
								column: 44
								index: 99
								line: 4
							}
							start: Object {
								column: 34
								index: 89
								line: 4
							}
						}
						left: JSAssignmentIdentifier {
							name: "stored"
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								identifierName: "stored"
								end: Object {
									column: 40
									index: 95
									line: 4
								}
								start: Object {
									column: 34
									index: 89
									line: 4
								}
							}
						}
						right: JSReferenceIdentifier {
							name: "a"
							loc: Object {
								filename: "es2015/for-in/nonstrict-initializer/input.js"
								identifierName: "a"
								end: Object {
									column: 44
									index: 99
									line: 4
								}
								start: Object {
									column: 43
									index: 98
									line: 4
								}
							}
						}
					}
					JSObjectExpression {
						loc: Object {
							filename: "es2015/for-in/nonstrict-initializer/input.js"
							end: Object {
								column: 64
								index: 119
								line: 4
							}
							start: Object {
								column: 46
								index: 101
								line: 4
							}
						}
						properties: Array [
							JSObjectProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "a"
										loc: Object {
											filename: "es2015/for-in/nonstrict-initializer/input.js"
											identifierName: "a"
											end: Object {
												column: 48
												index: 103
												line: 4
											}
											start: Object {
												column: 47
												index: 102
												line: 4
											}
										}
									}
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 48
											index: 103
											line: 4
										}
										start: Object {
											column: 47
											index: 102
											line: 4
										}
									}
								}
								value: JSNumericLiteral {
									value: 0
									format: undefined
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 51
											index: 106
											line: 4
										}
										start: Object {
											column: 50
											index: 105
											line: 4
										}
									}
								}
								loc: Object {
									filename: "es2015/for-in/nonstrict-initializer/input.js"
									end: Object {
										column: 51
										index: 106
										line: 4
									}
									start: Object {
										column: 47
										index: 102
										line: 4
									}
								}
							}
							JSObjectProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "b"
										loc: Object {
											filename: "es2015/for-in/nonstrict-initializer/input.js"
											identifierName: "b"
											end: Object {
												column: 54
												index: 109
												line: 4
											}
											start: Object {
												column: 53
												index: 108
												line: 4
											}
										}
									}
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 54
											index: 109
											line: 4
										}
										start: Object {
											column: 53
											index: 108
											line: 4
										}
									}
								}
								value: JSNumericLiteral {
									value: 1
									format: undefined
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 57
											index: 112
											line: 4
										}
										start: Object {
											column: 56
											index: 111
											line: 4
										}
									}
								}
								loc: Object {
									filename: "es2015/for-in/nonstrict-initializer/input.js"
									end: Object {
										column: 57
										index: 112
										line: 4
									}
									start: Object {
										column: 53
										index: 108
										line: 4
									}
								}
							}
							JSObjectProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "c"
										loc: Object {
											filename: "es2015/for-in/nonstrict-initializer/input.js"
											identifierName: "c"
											end: Object {
												column: 60
												index: 115
												line: 4
											}
											start: Object {
												column: 59
												index: 114
												line: 4
											}
										}
									}
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 60
											index: 115
											line: 4
										}
										start: Object {
											column: 59
											index: 114
											line: 4
										}
									}
								}
								value: JSNumericLiteral {
									value: 2
									format: undefined
									loc: Object {
										filename: "es2015/for-in/nonstrict-initializer/input.js"
										end: Object {
											column: 63
											index: 118
											line: 4
										}
										start: Object {
											column: 62
											index: 117
											line: 4
										}
									}
								}
								loc: Object {
									filename: "es2015/for-in/nonstrict-initializer/input.js"
									end: Object {
										column: 63
										index: 118
										line: 4
									}
									start: Object {
										column: 59
										index: 114
										line: 4
									}
								}
							}
						]
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
