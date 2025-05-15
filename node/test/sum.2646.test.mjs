
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 61 to equal 61', (t) => {
  assert.strictEqual(sum(0, 61), 61);
});
