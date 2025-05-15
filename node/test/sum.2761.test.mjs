
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 56 to equal 108', (t) => {
  assert.strictEqual(sum(52, 56), 108);
});
