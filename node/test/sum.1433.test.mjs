
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 58 to equal 102', (t) => {
  assert.strictEqual(sum(44, 58), 102);
});
