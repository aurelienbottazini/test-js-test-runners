
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 2 to equal 3', (t) => {
  assert.strictEqual(sum(1, 2), 3);
});
