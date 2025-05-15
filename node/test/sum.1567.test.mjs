
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 12 to equal 105', (t) => {
  assert.strictEqual(sum(93, 12), 105);
});
