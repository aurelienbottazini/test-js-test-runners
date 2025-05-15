
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 36 to equal 126', (t) => {
  assert.strictEqual(sum(90, 36), 126);
});
