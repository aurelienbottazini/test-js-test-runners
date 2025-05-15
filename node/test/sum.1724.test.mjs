
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 26 to equal 34', (t) => {
  assert.strictEqual(sum(8, 26), 34);
});
