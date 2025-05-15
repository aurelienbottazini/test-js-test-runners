
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 58 to equal 88', (t) => {
  assert.strictEqual(sum(30, 58), 88);
});
