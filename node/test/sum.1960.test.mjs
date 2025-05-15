
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 64 to equal 153', (t) => {
  assert.strictEqual(sum(89, 64), 153);
});
