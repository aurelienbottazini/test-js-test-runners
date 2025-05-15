
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 16 to equal 108', (t) => {
  assert.strictEqual(sum(92, 16), 108);
});
