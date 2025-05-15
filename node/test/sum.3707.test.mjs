
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 50 to equal 108', (t) => {
  assert.strictEqual(sum(58, 50), 108);
});
