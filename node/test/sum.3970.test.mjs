
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 55 to equal 126', (t) => {
  assert.strictEqual(sum(71, 55), 126);
});
