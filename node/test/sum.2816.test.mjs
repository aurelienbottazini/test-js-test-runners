
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 36 to equal 58', (t) => {
  assert.strictEqual(sum(22, 36), 58);
});
