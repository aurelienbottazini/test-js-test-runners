
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 71 to equal 98', (t) => {
  assert.strictEqual(sum(27, 71), 98);
});
