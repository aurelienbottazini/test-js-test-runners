
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 39 to equal 88', (t) => {
  assert.strictEqual(sum(49, 39), 88);
});
