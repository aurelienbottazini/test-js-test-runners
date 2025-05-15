
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 83 to equal 98', (t) => {
  assert.strictEqual(sum(15, 83), 98);
});
