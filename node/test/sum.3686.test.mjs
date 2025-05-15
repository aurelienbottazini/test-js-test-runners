
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 74 to equal 88', (t) => {
  assert.strictEqual(sum(14, 74), 88);
});
