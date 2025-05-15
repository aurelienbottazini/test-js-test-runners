
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 96 to equal 179', (t) => {
  assert.strictEqual(sum(83, 96), 179);
});
