# `buildPatchCodeFrame.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/cli-diagnostics/buildPatchCodeFrame.test.ts --update-snapshots` to update.

## `buildPatchCodeFrame`

### `0`

```
# Before
foo

# After
bar

# Diff
- foo
+ bar
```

### `1`

```
# Before
Sebastian
McKenzie

# After
Ana
Barreto

# Diff
  1   │ - Sebastian
  2   │ - McKenzie
    1 │ + Ana
    2 │ + Barreto
```

### `2`

```
# Before
Sebastian

# After
Seb astian

# Diff
- Sebastian
+ Seb·astian
```

### `3`

```
# Before
Sebastian

# After
Seb  astian

# Diff
- Sebastian
+ Seb··astian
```

### `4`

```
# Before
Sebastian

# After
Seb	astian

# Diff
- Sebastian
+ Seb→ astian
```

### `5`

```
# Before
Sebastian

# After
Seb		astian

# Diff
- Sebastian
+ Seb→ → astian
```

### `6`

```
# Before
let namedBackReference = "";
let namedBackReferenceIndex = ob1Get0(index) + 2;
let namedBackReferenceChar = input[namedBackReferenceIndex];
if (namedBackReferenceChar === "<") {
	namedBackReferenceChar = input[namedBackReferenceIndex];
	while (
		namedBackReferenceChar !== ">" &&
		namedBackReferenceIndex < input.length
	) {
		namedBackReference += namedBackReferenceChar;
		namedBackReferenceIndex++;
		namedBackReferenceChar = input[namedBackReferenceIndex];
	}
	if (namedBackReferenceChar === ">") {
		namedBackReference += namedBackReferenceChar;
		namedBackReferenceIndex++;
	}
	return this.finishComplexToken(
		"NamedBackReferenceCharacter",
		{
			value: namedBackReference,
			escaped: true,
		},
		ob1Coerce0(namedBackReferenceIndex),
	);
}

# After
let value = "";
let [char, next] = this.getInputChar(index, 2);

if (char === "<") {
	while (!this.isEOF(next)) {
		value += char;
		[char, next] = this.getInputChar(index, 1);

		if (char === ">") {
			break;
		}
	}

	return this.finishComplexToken(
		"NamedBackReferenceCharacter",
		{
			value,
			escaped: true,
		},
		index,
	);
}

# Diff
   1 	 │ - let·namedBackReference·=·"";
   2 	 │ - let·namedBackReferenceIndex·=·ob1Get0(index)·+·2;
   3 	 │ - let·namedBackReferenceChar·=·input[namedBackReferenceIndex];
   4 	 │ - if·(namedBackReferenceChar·===·"<")·{
   5 	 │ - → namedBackReferenceChar·=·input[namedBackReferenceIndex];
   6 	 │ - → while·(
   7 	 │ - → → namedBackReferenceChar·!==·">"·&&
   8 	 │ - → → namedBackReferenceIndex·<·input.length
   9 	 │ - → )·{
  10 	 │ - → → namedBackReference·+=·namedBackReferenceChar;
  11 	 │ - → → namedBackReferenceIndex++;
  12 	 │ - → → namedBackReferenceChar·=·input[namedBackReferenceIndex];
  13 	 │ - → }
  14 	 │ - → if·(namedBackReferenceChar·===·">")·{
  15 	 │ - → → namedBackReference·+=·namedBackReferenceChar;
  16 	 │ - → → namedBackReferenceIndex++;
  17 	 │ - → }
  	  1 │ + let·value·=·"";
  	  2 │ + let·[char,·next]·=·this.getInputChar(index,·2);
  	  3 │ +
  	  4 │ + if·(char·===·"<")·{
  	  5 │ + → while·(!this.isEOF(next))·{
  	  6 │ + → → value·+=·char;
  	  7 │ + → → [char,·next]·=·this.getInputChar(index,·1);
  	  8 │ +
  	  9 │ + → → if·(char·===·">")·{
  	 10 │ + → → → break;
  	 11 │ + → → }
  	 12 │ + → }
  	 13 │ +
  18 14 │   → return·this.finishComplexToken(
  19 15 │   → → "NamedBackReferenceCharacter",
  20 16 │   → → {
  21 	 │ - → → → value:·namedBackReference,
  	 17 │ + → → → value,
  22 18 │   → → → escaped:·true,
  23 19 │   → → },
  24 	 │ - → → ob1Coerce0(namedBackReferenceIndex),
  	 20 │ + → → index,
  25 21 │   → );
```

### `7`

```
# Before
<section>
	<>
		<div />
		<div />
	</>
</section/>

# After
<section>
	<div />
	<div />
</section>

# Diff
  1 1 │   <section>
  2   │ - → <>
  3   │ - → → <div·/>
  4   │ - → → <div·/>
  5   │ - → </>
  6   │ - </section/>
    2 │ + → <div·/>
    3 │ + → <div·/>
    4 │ + </section>
```

### `8`

```
# Before


# After


# Diff
- U+1
```

### `9`

```
# Before


# After


# Diff
- U+7f
```
