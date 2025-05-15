
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 11 to equal 98', (t) => {
  assert.strictEqual(sum(87, 11), 98);
});
