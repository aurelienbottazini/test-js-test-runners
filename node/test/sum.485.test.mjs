
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 56 to equal 150', (t) => {
  assert.strictEqual(sum(94, 56), 150);
});
