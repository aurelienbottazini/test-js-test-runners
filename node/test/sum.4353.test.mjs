
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 6 to equal 49', (t) => {
  assert.strictEqual(sum(43, 6), 49);
});
