
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 36 to equal 108', (t) => {
  assert.strictEqual(sum(72, 36), 108);
});
