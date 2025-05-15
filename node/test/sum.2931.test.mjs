
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 68 to equal 126', (t) => {
  assert.strictEqual(sum(58, 68), 126);
});
