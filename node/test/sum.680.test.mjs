
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 26 to equal 49', (t) => {
  assert.strictEqual(sum(23, 26), 49);
});
