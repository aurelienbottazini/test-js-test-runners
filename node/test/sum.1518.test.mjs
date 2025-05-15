
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 58 to equal 86', (t) => {
  assert.strictEqual(sum(28, 58), 86);
});
