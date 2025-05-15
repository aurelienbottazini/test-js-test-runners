
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 2 to equal 58', (t) => {
  assert.strictEqual(sum(56, 2), 58);
});
