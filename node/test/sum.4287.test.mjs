
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 77 to equal 108', (t) => {
  assert.strictEqual(sum(31, 77), 108);
});
