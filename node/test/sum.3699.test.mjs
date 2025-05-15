
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 2 to equal 34', (t) => {
  assert.strictEqual(sum(32, 2), 34);
});
