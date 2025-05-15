
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 8 to equal 98', (t) => {
  assert.strictEqual(sum(90, 8), 98);
});
