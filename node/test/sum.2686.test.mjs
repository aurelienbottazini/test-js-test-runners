
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 61 to equal 114', (t) => {
  assert.strictEqual(sum(53, 61), 114);
});
