
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 63 to equal 126', (t) => {
  assert.strictEqual(sum(63, 63), 126);
});
