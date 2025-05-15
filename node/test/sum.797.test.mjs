
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 70 to equal 137', (t) => {
  assert.strictEqual(sum(67, 70), 137);
});
