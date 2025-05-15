
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 95 to equal 178', (t) => {
  assert.strictEqual(sum(83, 95), 178);
});
