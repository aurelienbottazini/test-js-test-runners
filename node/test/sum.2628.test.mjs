
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 0 to equal 83', (t) => {
  assert.strictEqual(sum(83, 0), 83);
});
