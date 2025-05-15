
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 46 to equal 102', (t) => {
  assert.strictEqual(sum(56, 46), 102);
});
