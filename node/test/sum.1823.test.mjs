
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 69 to equal 98', (t) => {
  assert.strictEqual(sum(29, 69), 98);
});
