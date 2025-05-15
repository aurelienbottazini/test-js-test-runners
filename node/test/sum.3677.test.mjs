
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 48 to equal 57', (t) => {
  assert.strictEqual(sum(9, 48), 57);
});
