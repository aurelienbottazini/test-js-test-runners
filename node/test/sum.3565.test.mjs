
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 81 to equal 86', (t) => {
  assert.strictEqual(sum(5, 81), 86);
});
