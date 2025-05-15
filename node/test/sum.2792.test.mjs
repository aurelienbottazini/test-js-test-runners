
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 36 to equal 103', (t) => {
  assert.strictEqual(sum(67, 36), 103);
});
