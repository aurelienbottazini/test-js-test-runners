
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 45 to equal 137', (t) => {
  assert.strictEqual(sum(92, 45), 137);
});
