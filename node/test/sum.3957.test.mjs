
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 61 to equal 69', (t) => {
  assert.strictEqual(sum(8, 61), 69);
});
