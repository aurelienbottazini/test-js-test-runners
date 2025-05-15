
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 7 to equal 39', (t) => {
  assert.strictEqual(sum(32, 7), 39);
});
