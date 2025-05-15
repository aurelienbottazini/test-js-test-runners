
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 48 to equal 98', (t) => {
  assert.strictEqual(sum(50, 48), 98);
});
