
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 58 to equal 93', (t) => {
  assert.strictEqual(sum(35, 58), 93);
});
