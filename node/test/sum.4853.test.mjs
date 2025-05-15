
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 31 to equal 105', (t) => {
  assert.strictEqual(sum(74, 31), 105);
});
