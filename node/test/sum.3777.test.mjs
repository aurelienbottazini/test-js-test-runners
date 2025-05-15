
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 22 to equal 58', (t) => {
  assert.strictEqual(sum(36, 22), 58);
});
