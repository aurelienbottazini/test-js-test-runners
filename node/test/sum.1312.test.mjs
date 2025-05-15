
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 41 to equal 98', (t) => {
  assert.strictEqual(sum(57, 41), 98);
});
