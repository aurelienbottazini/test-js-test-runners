
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 61 to equal 126', (t) => {
  assert.strictEqual(sum(65, 61), 126);
});
