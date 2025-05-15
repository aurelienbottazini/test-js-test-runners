
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 28 to equal 58', (t) => {
  assert.strictEqual(sum(30, 28), 58);
});
