
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 39 to equal 103', (t) => {
  assert.strictEqual(sum(64, 39), 103);
});
