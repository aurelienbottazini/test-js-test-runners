
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 85 to equal 179', (t) => {
  assert.strictEqual(sum(94, 85), 179);
});
