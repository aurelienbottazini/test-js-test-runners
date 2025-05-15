
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 43 to equal 137', (t) => {
  assert.strictEqual(sum(94, 43), 137);
});
