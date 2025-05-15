
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 49 to equal 69', (t) => {
  assert.strictEqual(sum(20, 49), 69);
});
