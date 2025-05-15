
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 9 to equal 105', (t) => {
  assert.strictEqual(sum(96, 9), 105);
});
