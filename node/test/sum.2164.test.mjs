
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 94 to equal 137', (t) => {
  assert.strictEqual(sum(43, 94), 137);
});
