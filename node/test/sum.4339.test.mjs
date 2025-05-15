
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 95 to equal 171', (t) => {
  assert.strictEqual(sum(76, 95), 171);
});
