
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 61 to equal 108', (t) => {
  assert.strictEqual(sum(47, 61), 108);
});
