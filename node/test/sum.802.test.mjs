
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 58 to equal 65', (t) => {
  assert.strictEqual(sum(7, 58), 65);
});
