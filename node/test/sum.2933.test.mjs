
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 88 to equal 137', (t) => {
  assert.strictEqual(sum(49, 88), 137);
});
