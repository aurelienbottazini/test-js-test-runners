
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 95 to equal 126', (t) => {
  assert.strictEqual(sum(31, 95), 126);
});
