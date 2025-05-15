
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 61 to equal 144', (t) => {
  assert.strictEqual(sum(83, 61), 144);
});
