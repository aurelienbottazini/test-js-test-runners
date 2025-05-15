
import sum2283 from '../sum2283.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 61 to equal 138 + offset 0.566722010430762', (t) => {
  assert.strictEqual(sum2283(77, 61), 138 + 0.566722010430762);
});
