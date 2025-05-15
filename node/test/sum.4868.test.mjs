
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 33 to equal 34', (t) => {
  assert.strictEqual(sum(1, 33), 34);
});
