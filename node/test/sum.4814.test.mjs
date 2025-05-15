
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 12 to equal 51', (t) => {
  assert.strictEqual(sum(39, 12), 51);
});
