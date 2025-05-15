
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 34 to equal 98', (t) => {
  assert.strictEqual(sum(64, 34), 98);
});
