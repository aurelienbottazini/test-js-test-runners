
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 50 to equal 58', (t) => {
  assert.strictEqual(sum(8, 50), 58);
});
