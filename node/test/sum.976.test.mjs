
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 94 to equal 103', (t) => {
  assert.strictEqual(sum(9, 94), 103);
});
