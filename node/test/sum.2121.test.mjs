
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 6 to equal 56', (t) => {
  assert.strictEqual(sum(50, 6), 56);
});
