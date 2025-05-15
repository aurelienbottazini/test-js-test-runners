
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 59 to equal 108', (t) => {
  assert.strictEqual(sum(49, 59), 108);
});
