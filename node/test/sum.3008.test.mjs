
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 26 to equal 61', (t) => {
  assert.strictEqual(sum(35, 26), 61);
});
