
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 24 to equal 105', (t) => {
  assert.strictEqual(sum(81, 24), 105);
});
