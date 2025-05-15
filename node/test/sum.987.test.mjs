
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 26 to equal 108', (t) => {
  assert.strictEqual(sum(82, 26), 108);
});
