
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 61 to equal 102', (t) => {
  assert.strictEqual(sum(41, 61), 102);
});
