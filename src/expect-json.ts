/*!
 * Jest Expect JSON <https://github.com/smujmaiku/jest-expect-json>
 * Copyright(c) 2021 Michael Szmadzinski
 * MIT Licensed
 */

import matchers from 'expect/build/matchers';

declare global {
	// https://github.com/typescript-eslint/typescript-eslint/issues/2237#issuecomment-649925377
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace jest {
		interface Matchers<R> {
			jsonMatching(expected: unknown): R;
			jsonContaining(expected: unknown): R;
		}
		interface Expect {
			jsonMatching(expected: any): any;
			jsonContaining(expected: any): any;
		}
	}
}

expect.extend({
	jsonMatching(received: string, expected: unknown) {
		return matchers.toEqual(JSON.parse(received), expected);
	},
	jsonContaining(received: string, expected: unknown) {
		if (expected instanceof Array) {
			return matchers.toEqual(JSON.parse(received), expect.arrayContaining(expected));
		} else if (expected instanceof Object) {
			return matchers.toEqual(JSON.parse(received), expect.objectContaining(expected));
		} else if (typeof expected === 'string') {
			return matchers.toEqual(JSON.parse(received), expect.stringContaining(expected));
		}
		return matchers.toEqual(JSON.parse(received), expected);
	},
});
