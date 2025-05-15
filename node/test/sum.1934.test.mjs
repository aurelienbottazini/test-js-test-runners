
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 8 to equal 58', (t) => {
  assert.strictEqual(sum(50, 8), 58);
});
