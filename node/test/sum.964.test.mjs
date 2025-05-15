
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 44 to equal 98', (t) => {
  assert.strictEqual(sum(54, 44), 98);
});
