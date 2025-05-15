
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 39 to equal 40', (t) => {
  assert.strictEqual(sum(1, 39), 40);
});
