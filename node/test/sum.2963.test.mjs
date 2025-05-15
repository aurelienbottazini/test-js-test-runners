
import sum2963 from '../sum2963.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 91 to equal 106 + offset 0.980945614014854', (t) => {
  assert.strictEqual(sum2963(15, 91), 106 + 0.980945614014854);
});
