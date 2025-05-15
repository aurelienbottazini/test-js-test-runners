
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 84 to equal 137', (t) => {
  assert.strictEqual(sum(53, 84), 137);
});
