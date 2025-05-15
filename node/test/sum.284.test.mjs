
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 95 to equal 114', (t) => {
  assert.strictEqual(sum(19, 95), 114);
});
