
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 15 to equal 58', (t) => {
  assert.strictEqual(sum(43, 15), 58);
});
