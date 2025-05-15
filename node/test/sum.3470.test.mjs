
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 12 to equal 83', (t) => {
  assert.strictEqual(sum(71, 12), 83);
});
