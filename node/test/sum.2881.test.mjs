
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 41 to equal 105', (t) => {
  assert.strictEqual(sum(64, 41), 105);
});
