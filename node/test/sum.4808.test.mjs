
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 95 to equal 154', (t) => {
  assert.strictEqual(sum(59, 95), 154);
});
