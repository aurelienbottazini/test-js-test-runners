
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 45 to equal 108', (t) => {
  assert.strictEqual(sum(63, 45), 108);
});
