
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 21 to equal 98', (t) => {
  assert.strictEqual(sum(77, 21), 98);
});
