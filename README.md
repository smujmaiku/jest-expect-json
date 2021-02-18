# Jest Expect JSON

Do you need to test objects against json strings?
Does jest expect not have all the json matchers you deserve?
Are your fetch tests looking real fragile with that block of json?

Import `jest-expect-json` into your tests now!
Built on [Jest expect matchers][jest-matchers], `jest-expect-json add useful json testing to jest!

## Setup

Add `jest-expect-json` to your test file like so:

```js
import 'jest-expect-json';
```

## Methods

### jsonMatching

`jsonMatching` parses a json string for use with `expect`.

```js
fetch('url', {
	method: 'POST',
	body: '{"some": "DATA"}',
})
expect(fetch).toBeCalledWith('url', {
	method: 'POST',
	body: expect.jsonMatching({ some: 'DATA' }),
});
```

### jsonContaining

`jsonContaining` parses a json string and tests the data with the appropriate `-containing` method;

```js
fetch('url', {
	method: 'POST',
	body: '{"some": "DATA", "MORE": "DATA!"}',
})
expect(fetch).toBeCalledWith('url', {
	method: 'POST',
	body: expect.jsonContaining({ some: 'DATA' }),
});
```

## Notes

Having trouble with type definitions? Append to your `package.json` like [jest-extended][jest-extended-setup]:

```json
"jest": {
  "setupFilesAfterEnv": [
    "jest-expect-json"
  ]
}
```

[jest-matchers]: https://jestjs.io/docs/en/expect#expectextendmatchers
[jest-extended-setup]: https://www.npmjs.com/package/jest-extended#setup