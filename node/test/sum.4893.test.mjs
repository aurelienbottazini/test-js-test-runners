
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 74 to equal 168', (t) => {
  assert.strictEqual(sum(94, 74), 168);
});
