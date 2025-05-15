
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 1 to equal 86', (t) => {
  assert.strictEqual(sum(85, 1), 86);
});
