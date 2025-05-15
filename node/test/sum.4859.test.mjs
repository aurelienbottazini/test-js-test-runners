
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 54 to equal 108', (t) => {
  assert.strictEqual(sum(54, 54), 108);
});
