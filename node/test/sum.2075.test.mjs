
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 84 to equal 88', (t) => {
  assert.strictEqual(sum(4, 84), 88);
});
