
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 8 to equal 57', (t) => {
  assert.strictEqual(sum(49, 8), 57);
});
