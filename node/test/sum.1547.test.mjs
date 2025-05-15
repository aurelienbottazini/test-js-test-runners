
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 29 to equal 98', (t) => {
  assert.strictEqual(sum(69, 29), 98);
});
