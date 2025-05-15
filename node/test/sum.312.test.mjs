
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 1 to equal 72', (t) => {
  assert.strictEqual(sum(71, 1), 72);
});
