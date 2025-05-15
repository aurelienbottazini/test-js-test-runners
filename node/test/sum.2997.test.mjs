
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 31 to equal 34', (t) => {
  assert.strictEqual(sum(3, 31), 34);
});
