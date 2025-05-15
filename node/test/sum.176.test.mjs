
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 88 to equal 98', (t) => {
  assert.strictEqual(sum(10, 88), 98);
});
