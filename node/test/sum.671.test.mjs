
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 95 to equal 102', (t) => {
  assert.strictEqual(sum(7, 95), 102);
});
