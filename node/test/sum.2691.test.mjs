
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 95 to equal 110', (t) => {
  assert.strictEqual(sum(15, 95), 110);
});
