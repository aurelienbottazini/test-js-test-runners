
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 24 to equal 58', (t) => {
  assert.strictEqual(sum(34, 24), 58);
});
