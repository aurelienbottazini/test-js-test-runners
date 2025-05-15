
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 73 to equal 105', (t) => {
  assert.strictEqual(sum(32, 73), 105);
});
