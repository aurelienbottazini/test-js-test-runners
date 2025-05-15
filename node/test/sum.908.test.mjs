
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 4 to equal 103', (t) => {
  assert.strictEqual(sum(99, 4), 103);
});
