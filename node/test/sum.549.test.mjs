
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 49 to equal 88', (t) => {
  assert.strictEqual(sum(39, 49), 88);
});
