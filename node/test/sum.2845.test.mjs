
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 28 to equal 103', (t) => {
  assert.strictEqual(sum(75, 28), 103);
});
