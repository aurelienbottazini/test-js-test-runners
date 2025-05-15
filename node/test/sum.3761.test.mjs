
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 45 to equal 57', (t) => {
  assert.strictEqual(sum(12, 45), 57);
});
