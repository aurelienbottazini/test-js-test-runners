
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 51 to equal 98', (t) => {
  assert.strictEqual(sum(47, 51), 98);
});
